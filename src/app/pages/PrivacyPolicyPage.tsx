import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Shield, Loader2 } from "lucide-react";

export function PrivacyPolicyPage() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Privacy Policy");
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "Privacy Policy - Orbital Fitness";
    fetch("/api/v1/superadmin/public/legal/privacy_policy/")
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setContent(data.content ?? "");
        setTitle(data.title ?? "Privacy Policy");
        setLastUpdated(data.last_updated ?? null);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const displayContent = content;

  return (
    <div className="relative pb-20">
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 rounded-full blur-2xl" />
                  <Shield className="relative w-16 h-16 text-[#6CFFF3]" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
                {title}
              </h1>
              {lastUpdated && (
                <p className="text-white/50 text-sm">
                  Last updated: {new Date(lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              )}
            </div>

            {/* Content Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/20 to-[#6CFFF3]/20 rounded-3xl blur-3xl" />
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <Loader2 className="w-8 h-8 text-[#6CFFF3] animate-spin" />
                  </div>
                ) : error ? (
                  <p className="text-white/50 text-center py-20">Unable to load Privacy Policy. Please try again later.</p>
                ) : (
                  <LegalContent content={displayContent} />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function LegalContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-4 text-white/80 leading-relaxed">
      {lines.map((line, i) => {
        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0">
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-semibold text-[#6CFFF3] mt-6 mb-3">
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <li key={i} className="ml-6 list-disc">
              <InlineFormatted text={line.replace("- ", "")} />
            </li>
          );
        }
        if (line.trim() === "") return <div key={i} className="h-2" />;
        return (
          <p key={i}>
            <InlineFormatted text={line} />
          </p>
        );
      })}
    </div>
  );
}

function InlineFormatted({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
