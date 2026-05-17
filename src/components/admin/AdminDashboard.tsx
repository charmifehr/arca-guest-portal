"use client";

import { GuestPortal } from "@/components/GuestPortal";
import type { PortalContent } from "@/lib/types";
import { generateId } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Tab = "welcome" | "photos" | "dining" | "events" | "island" | "tours";

const TABS: { id: Tab; label: string }[] = [
  { id: "welcome", label: "Welcome" },
  { id: "photos", label: "Photos" },
  { id: "dining", label: "Dining" },
  { id: "events", label: "Events" },
  { id: "island", label: "Island" },
  { id: "tours", label: "Tours" },
];

export function AdminDashboard() {
  const router = useRouter();
  const [content, setContent] = useState<PortalContent | null>(null);
  const [tab, setTab] = useState<Tab>("welcome");
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    const res = await fetch("/api/content");
    if (res.ok) setContent((await res.json()) as PortalContent);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSave() {
    if (!content) return;
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    setSaving(false);
    setMessage(res.ok ? "Saved — changes are live." : "Save failed. Try again.");
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  if (!content) {
    return (
      <p className="p-8 text-center text-charcoal-muted">Loading content…</p>
    );
  }

  if (preview) {
    return (
      <div className="relative">
        <div className="sticky top-0 z-50 flex gap-2 border-b border-linen-dark bg-linen-light p-3">
          <button
            type="button"
            onClick={() => setPreview(false)}
            className="min-h-touch flex-1 rounded-full bg-charcoal font-heading text-xs uppercase tracking-wide text-linen-light"
          >
            Back to editor
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="min-h-touch flex-1 rounded-full bg-ocean font-heading text-xs uppercase tracking-wide text-white disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save & publish"}
          </button>
        </div>
        <GuestPortal content={content} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl pb-32">
      <header className="sticky top-0 z-40 border-b border-linen-dark bg-linen-light/95 px-4 py-4 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-heading text-lg font-medium">Portal Admin</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="min-h-touch px-3 font-heading text-xs uppercase text-charcoal-muted"
          >
            Log out
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setPreview(true)}
            className="min-h-touch flex-1 rounded-full border border-ocean font-heading text-xs uppercase tracking-wide text-ocean"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="min-h-touch flex-1 rounded-full bg-ocean font-heading text-xs uppercase tracking-wide text-linen-light disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>
        {message ? (
          <p className="mt-2 text-center text-sm text-ocean-dark" role="status">
            {message}
          </p>
        ) : null}
      </header>

      <nav className="flex gap-1 overflow-x-auto border-b border-linen-dark px-2 py-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`min-h-touch shrink-0 rounded-full px-4 font-heading text-xs uppercase tracking-wide ${
              tab === t.id
                ? "bg-charcoal text-linen-light"
                : "bg-linen text-charcoal-muted"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="space-y-4 p-4">
        {tab === "welcome" && (
          <WelcomeEditor
            content={content}
            onChange={(welcome) => setContent({ ...content, welcome })}
          />
        )}
        {tab === "photos" && (
          <MediaEditor
            content={content}
            onChange={(media) => setContent({ ...content, media })}
          />
        )}
        {tab === "dining" && (
          <DiningEditor
            content={content}
            onChange={(dining) => setContent({ ...content, dining })}
          />
        )}
        {tab === "events" && (
          <EventsEditor
            events={content.events}
            onChange={(events) => setContent({ ...content, events })}
          />
        )}
        {tab === "island" && (
          <IslandEditor
            island={content.island}
            onChange={(island) => setContent({ ...content, island })}
          />
        )}
        {tab === "tours" && (
          <ToursEditor
            tours={content.tours}
            onChange={(tours) => setContent({ ...content, tours })}
          />
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="heading-caps">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full min-h-touch rounded-xl border border-linen-dark bg-white px-4 font-body text-base";

function WelcomeEditor({
  content,
  onChange,
}: {
  content: PortalContent;
  onChange: (welcome: PortalContent["welcome"]) => void;
}) {
  return (
  <>
      <Field label="Welcome message">
        <textarea
          value={content.welcome.message}
          onChange={(e) =>
            onChange({ ...content.welcome, message: e.target.value })
          }
          rows={8}
          className={`${inputClass} resize-y`}
        />
        <p className="mt-1 text-xs text-charcoal-muted">
          Separate paragraphs with a blank line. Use **bold** for emphasis.
        </p>
      </Field>
      <Field label="Background image URL">
        <input
          type="url"
          value={content.welcome.backgroundImage}
          onChange={(e) =>
            onChange({ ...content.welcome, backgroundImage: e.target.value })
          }
          className={inputClass}
        />
      </Field>
    </>
  );
}

function MediaEditor({
  content,
  onChange,
}: {
  content: PortalContent;
  onChange: (media: NonNullable<PortalContent["media"]>) => void;
}) {
  const media = content.media ?? {
    diningBanner: "",
    eventsBanner: "",
    islandBanner: "",
    islandInline: "",
    toursBanner: "",
  };

  const updateMedia = (
    key: keyof NonNullable<PortalContent["media"]>,
    value: string,
  ) => {
    onChange({ ...media, [key]: value });
  };

  return (
    <>
      <p className="rounded-2xl border border-linen-dark bg-white p-4 text-sm text-charcoal-muted">
        Paste direct image URLs here to replace the main photos used across the
        guest portal. Tour partner card photos are edited under the Tours tab.
      </p>
      <Field label="Dining Menu banner photo">
        <input
          type="url"
          value={media.diningBanner}
          onChange={(e) => updateMedia("diningBanner", e.target.value)}
          className={inputClass}
          placeholder="https://..."
        />
      </Field>
      <Field label="This Week at Arca banner photo">
        <input
          type="url"
          value={media.eventsBanner}
          onChange={(e) => updateMedia("eventsBanner", e.target.value)}
          className={inputClass}
          placeholder="https://..."
        />
      </Field>
      <Field label="The Island banner photo">
        <input
          type="url"
          value={media.islandBanner}
          onChange={(e) => updateMedia("islandBanner", e.target.value)}
          className={inputClass}
          placeholder="https://..."
        />
      </Field>
      <Field label="The Island inline photo">
        <input
          type="url"
          value={media.islandInline}
          onChange={(e) => updateMedia("islandInline", e.target.value)}
          className={inputClass}
          placeholder="https://..."
        />
      </Field>
      <Field label="Tours and Excursions banner photo">
        <input
          type="url"
          value={media.toursBanner}
          onChange={(e) => updateMedia("toursBanner", e.target.value)}
          className={inputClass}
          placeholder="https://..."
        />
      </Field>
    </>
  );
}

function DiningEditor({
  content,
  onChange,
}: {
  content: PortalContent;
  onChange: (dining: PortalContent["dining"]) => void;
}) {
  const dining = content.dining;

  return (
    <>
      <Field label="Breakfast hours">
        <input
          value={dining.hours.breakfast}
          onChange={(e) =>
            onChange({
              ...dining,
              hours: { ...dining.hours, breakfast: e.target.value },
            })
          }
          className={inputClass}
        />
      </Field>
      <Field label="Lunch & dinner hours">
        <input
          value={dining.hours.lunchDinner}
          onChange={(e) =>
            onChange({
              ...dining,
              hours: { ...dining.hours, lunchDinner: e.target.value },
            })
          }
          className={inputClass}
        />
      </Field>

      {dining.categories.map((cat, catIdx) => (
        <div
          key={cat.id}
          className="mt-6 rounded-2xl border border-linen-dark bg-white p-4"
        >
          <div className="flex items-center justify-between gap-2">
            <input
              value={cat.title}
              onChange={(e) => {
                const categories = [...dining.categories];
                categories[catIdx] = { ...cat, title: e.target.value };
                onChange({ ...dining, categories });
              }}
              className={`${inputClass} font-heading`}
            />
            <button
              type="button"
              className="text-xs text-red-700"
              onClick={() => {
                onChange({
                  ...dining,
                  categories: dining.categories.filter((_, i) => i !== catIdx),
                });
              }}
            >
              Remove category
            </button>
          </div>

          {cat.sections.map((sec, secIdx) => (
            <div key={sec.id} className="mt-4 border-t border-linen pt-4">
              <input
                value={sec.title}
                onChange={(e) => {
                  const categories = [...dining.categories];
                  const sections = [...cat.sections];
                  sections[secIdx] = { ...sec, title: e.target.value };
                  categories[catIdx] = { ...cat, sections };
                  onChange({ ...dining, categories });
                }}
                className={`${inputClass} text-sm`}
                placeholder="Section title"
              />
              {sec.items.map((item, itemIdx) => (
                <div
                  key={item.id}
                  className="mt-3 space-y-2 rounded-xl bg-linen/50 p-3"
                >
                  <input
                    value={item.name}
                    onChange={(e) => {
                      const categories = [...dining.categories];
                      const sections = [...cat.sections];
                      const items = [...sec.items];
                      items[itemIdx] = { ...item, name: e.target.value };
                      sections[secIdx] = { ...sec, items };
                      categories[catIdx] = { ...cat, sections };
                      onChange({ ...dining, categories });
                    }}
                    className={inputClass}
                    placeholder="Item name"
                  />
                  <textarea
                    value={item.description}
                    onChange={(e) => {
                      const categories = [...dining.categories];
                      const sections = [...cat.sections];
                      const items = [...sec.items];
                      items[itemIdx] = {
                        ...item,
                        description: e.target.value,
                      };
                      sections[secIdx] = { ...sec, items };
                      categories[catIdx] = { ...cat, sections };
                      onChange({ ...dining, categories });
                    }}
                    rows={2}
                    className={`${inputClass} text-sm`}
                    placeholder="Description"
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <input
                      type="number"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => {
                        const categories = [...dining.categories];
                        const sections = [...cat.sections];
                        const items = [...sec.items];
                        items[itemIdx] = {
                          ...item,
                          price: parseFloat(e.target.value) || 0,
                        };
                        sections[secIdx] = { ...sec, items };
                        categories[catIdx] = { ...cat, sections };
                        onChange({ ...dining, categories });
                      }}
                      className={`${inputClass} w-28`}
                    />
                    <label className="flex min-h-touch items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={Boolean(item.unavailable)}
                        onChange={(e) => {
                          const categories = [...dining.categories];
                          const sections = [...cat.sections];
                          const items = [...sec.items];
                          items[itemIdx] = {
                            ...item,
                            unavailable: e.target.checked,
                          };
                          sections[secIdx] = { ...sec, items };
                          categories[catIdx] = { ...cat, sections };
                          onChange({ ...dining, categories });
                        }}
                      />
                      Unavailable
                    </label>
                    <button
                      type="button"
                      className="text-xs text-red-700"
                      onClick={() => {
                        const categories = [...dining.categories];
                        const sections = [...cat.sections];
                        sections[secIdx] = {
                          ...sec,
                          items: sec.items.filter((_, i) => i !== itemIdx),
                        };
                        categories[catIdx] = { ...cat, sections };
                        onChange({ ...dining, categories });
                      }}
                    >
                      Delete item
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="mt-2 min-h-touch text-sm text-ocean"
                onClick={() => {
                  const categories = [...dining.categories];
                  const sections = [...cat.sections];
                  sections[secIdx] = {
                    ...sec,
                    items: [
                      ...sec.items,
                      {
                        id: generateId("menu"),
                        name: "New item",
                        description: "",
                        price: 0,
                      },
                    ],
                  };
                  categories[catIdx] = { ...cat, sections };
                  onChange({ ...dining, categories });
                }}
              >
                + Add item
              </button>
              <button
                type="button"
                className="ml-4 min-h-touch text-sm text-red-700"
                onClick={() => {
                  const categories = [...dining.categories];
                  categories[catIdx] = {
                    ...cat,
                    sections: cat.sections.filter((_, i) => i !== secIdx),
                  };
                  onChange({ ...dining, categories });
                }}
              >
                Remove section
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-3 min-h-touch text-sm text-ocean"
            onClick={() => {
              const categories = [...dining.categories];
              categories[catIdx] = {
                ...cat,
                sections: [
                  ...cat.sections,
                  {
                    id: generateId("section"),
                    title: "New Section",
                    items: [],
                  },
                ],
              };
              onChange({ ...dining, categories });
            }}
          >
            + Add section
          </button>
        </div>
      ))}
      <button
        type="button"
        className="mt-4 min-h-touch w-full rounded-full border border-dashed border-ocean font-heading text-xs uppercase text-ocean"
        onClick={() =>
          onChange({
            ...dining,
            categories: [
              ...dining.categories,
              {
                id: generateId("cat"),
                title: "New Category",
                sections: [],
              },
            ],
          })
        }
      >
        + Add menu category
      </button>
    </>
  );
}

function EventsEditor({
  events,
  onChange,
}: {
  events: PortalContent["events"];
  onChange: (events: PortalContent["events"]) => void;
}) {
  const move = (index: number, dir: -1 | 1) => {
    const next = [...events];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <>
      {events.map((event, idx) => (
        <div
          key={event.id}
          className="space-y-3 rounded-2xl border border-linen-dark bg-white p-4"
        >
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => move(idx, -1)}
              className="min-h-touch min-w-touch rounded-lg border border-linen-dark"
              aria-label="Move up"
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => move(idx, 1)}
              className="min-h-touch min-w-touch rounded-lg border border-linen-dark"
              aria-label="Move down"
            >
              ↓
            </button>
            <button
              type="button"
              onClick={() => onChange(events.filter((_, i) => i !== idx))}
              className="ml-auto min-h-touch px-3 text-xs text-red-700"
            >
              Delete
            </button>
          </div>
          {(
            [
              ["name", "Event name"],
              ["day", "Day"],
              ["date", "Date"],
              ["time", "Time"],
              ["description", "Description"],
              ["location", "Location (optional)"],
            ] as const
          ).map(([key, label]) => (
            <Field key={key} label={label}>
              {key === "description" ? (
                <textarea
                  value={event[key] ?? ""}
                  onChange={(e) => {
                    const next = [...events];
                    next[idx] = { ...event, [key]: e.target.value };
                    onChange(next);
                  }}
                  rows={2}
                  className={`${inputClass} resize-y`}
                />
              ) : (
                <input
                  value={event[key] ?? ""}
                  onChange={(e) => {
                    const next = [...events];
                    next[idx] = { ...event, [key]: e.target.value };
                    onChange(next);
                  }}
                  className={inputClass}
                />
              )}
            </Field>
          ))}
        </div>
      ))}
      <button
        type="button"
        className="min-h-touch w-full rounded-full border border-dashed border-ocean font-heading text-xs uppercase text-ocean"
        onClick={() =>
          onChange([
            ...events,
            {
              id: generateId("event"),
              name: "New Event",
              day: "Monday",
              date: "",
              time: "",
              description: "",
            },
          ])
        }
      >
        + Add event
      </button>
    </>
  );
}

function IslandEditor({
  island,
  onChange,
}: {
  island: PortalContent["island"];
  onChange: (island: PortalContent["island"]) => void;
}) {
  return (
    <>
      {island.subsections.map((sub, subIdx) => (
        <div
          key={sub.id}
          className="rounded-2xl border border-linen-dark bg-white p-4"
        >
          <input
            value={sub.title}
            onChange={(e) => {
              const subsections = [...island.subsections];
              subsections[subIdx] = { ...sub, title: e.target.value };
              onChange({ subsections });
            }}
            className={`${inputClass} font-heading`}
          />
          {sub.items.map((item, itemIdx) => (
            <div key={itemIdx} className="mt-2 flex gap-2">
              <textarea
                value={item}
                onChange={(e) => {
                  const subsections = [...island.subsections];
                  const items = [...sub.items];
                  items[itemIdx] = e.target.value;
                  subsections[subIdx] = { ...sub, items };
                  onChange({ subsections });
                }}
                rows={2}
                className={`${inputClass} flex-1 text-sm`}
              />
              <button
                type="button"
                className="shrink-0 text-xs text-red-700"
                onClick={() => {
                  const subsections = [...island.subsections];
                  subsections[subIdx] = {
                    ...sub,
                    items: sub.items.filter((_, i) => i !== itemIdx),
                  };
                  onChange({ subsections });
                }}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 text-sm text-ocean"
            onClick={() => {
              const subsections = [...island.subsections];
              subsections[subIdx] = { ...sub, items: [...sub.items, "New fact"] };
              onChange({ subsections });
            }}
          >
            + Add line
          </button>
        </div>
      ))}
    </>
  );
}

function ToursEditor({
  tours,
  onChange,
}: {
  tours: PortalContent["tours"];
  onChange: (tours: PortalContent["tours"]) => void;
}) {
  return (
    <>
      <Field label="Snorkeling note">
        <textarea
          value={tours.snorkelingNote}
          onChange={(e) =>
            onChange({ ...tours, snorkelingNote: e.target.value })
          }
          rows={3}
          className={`${inputClass} resize-y`}
        />
      </Field>
      {tours.partners.map((partner, idx) => (
        <div
          key={partner.id}
          className="space-y-2 rounded-2xl border border-linen-dark bg-white p-4"
        >
          <button
            type="button"
            className="float-right text-xs text-red-700"
            onClick={() =>
              onChange({
                ...tours,
                partners: tours.partners.filter((_, i) => i !== idx),
              })
            }
          >
            Delete
          </button>
          <Field label="Photo URL (optional)">
            <input
              type="url"
              value={partner.imageUrl ?? ""}
              onChange={(e) => {
                const partners = [...tours.partners];
                partners[idx] = {
                  ...partner,
                  imageUrl: e.target.value || undefined,
                };
                onChange({ ...tours, partners });
              }}
              className={inputClass}
              placeholder="https://..."
            />
          </Field>
          {(
            [
              ["name", "Name"],
              ["category", "Category"],
              ["description", "Description"],
              ["details", "Details"],
              ["bookingNote", "Booking note"],
              ["recommendation", "Arca note (optional)"],
            ] as const
          ).map(([key, label]) => (
            <Field key={key} label={label}>
              <textarea
                value={partner[key] ?? ""}
                onChange={(e) => {
                  const partners = [...tours.partners];
                  partners[idx] = { ...partner, [key]: e.target.value };
                  onChange({ ...tours, partners });
                }}
                rows={key === "description" ? 3 : 2}
                className={`${inputClass} resize-y text-sm`}
              />
            </Field>
          ))}
        </div>
      ))}
      <button
        type="button"
        className="min-h-touch w-full rounded-full border border-dashed border-ocean font-heading text-xs uppercase text-ocean"
        onClick={() =>
          onChange({
            ...tours,
            partners: [
              ...tours.partners,
              {
                id: generateId("partner"),
                name: "New Partner",
                category: "Category",
                description: "",
                details: "",
                bookingNote: "",
              },
            ],
          })
        }
      >
        + Add partner
      </button>
    </>
  );
}
