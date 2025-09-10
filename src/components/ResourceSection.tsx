import { ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ResourceLink {
  name: string;
  url?: string;
  description?: string;
}

interface ResourceSectionProps {
  title: string;
  icon: React.ReactNode;
  quote: string;
  links: ResourceLink[];
}

export function ResourceSection({ title, icon, quote, links }: ResourceSectionProps) {
  const [copiedUrl, setCopiedUrl] = useState<string>("");
  const { toast } = useToast();

  const copyToClipboard = async (url: string, name: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      toast({
        description: `${name} link copied to clipboard`,
      });
      setTimeout(() => setCopiedUrl(""), 2000);
    } catch (err) {
      toast({
        description: "Failed to copy link",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-foreground/80">
          {icon}
        </div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      
      <blockquote className="border-l-2 border-muted-foreground/20 pl-4 mb-8">
        <p className="text-muted-foreground italic">{quote}</p>
      </blockquote>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link, index) => (
          <Card key={index} className="group transition-all duration-300 hover:shadow-lg border-0 bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                {link.name}
                <div className="flex gap-2">
                  {link.url && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard(link.url!, link.name)}
                      >
                        {copiedUrl === link.url ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </CardTitle>
              {link.description && (
                <CardDescription className="text-sm">
                  {link.description}
                </CardDescription>
              )}
            </CardHeader>
            {link.url && (
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground font-mono break-all">
                  {link.url}
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}