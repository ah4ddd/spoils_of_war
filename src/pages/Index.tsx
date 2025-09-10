import { ThemeToggle } from "@/components/ThemeToggle";
import { ResourceSection } from "@/components/ResourceSection";
import { Github, Tv, Gamepad2, BookOpen, Music, HardDrive, Smartphone, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const streamingResources = [
    { name: "Fmovies", url: "https://wvw-fmovies.com/", description: "Popular streaming site" },
    { name: "Sflix", url: "https://sflix.to", description: "High quality streams" },
    { name: "Soap2Day", url: "https://ww25.soap2day.day/", description: "Classic streaming platform" },
    { name: "Bflix", url: "https://bflix.to", description: "Fast streaming service" },
    { name: "Cinego", url: "https://freeonlinehd.site/cinego/", description: "HD movie streams" },
  ];

  const gamingResources = [
    { name: "FitGirl Repacks", url: "https://fitgirl-repacks.site", description: "Best small size, legit repacks" },
    { name: "DODI Repacks", url: "https://dodi-repacks.site/", description: "Fast, clean game repacks" },
    { name: "SteamUnlocked", url: "https://steamunlocked.net", description: "Pre-installed games" },
    { name: "1337x Games", url: "https://1337x.to/popular-games", description: "Popular game torrents" },
    { name: "Vimm's Lair", url: "https://vimm.net", description: "Console ROMs & emulation" },
    { name: "r/PiratedGames", url: "https://www.reddit.com/r/PiratedGames/", description: "Updates and community" },
  ];

  const bookResources = [
    { name: "Anna's Archive", url: "https://annas-archive.org", description: "Sci-Hub + Z-lib combo" },
    { name: "Library Genesis", url: "https://libgen.li/", description: "Scientific articles & books" },
    { name: "Welib", url: "https://welib.org/", description: "Academic resource library" },
    { name: "Sci-Hub", url: "https://sci-hub.se", description: "Paywalled papers unlocked (use VPN in India)" },
  ];

  const musicResources = [
    { name: "Soulseek", url: "https://slsknet.org", description: "P2P app, must install" },
    { name: "NewAlbumReleases", url: "https://newalbumreleases.net", description: "Latest album releases" },
    { name: "Rutracker", url: "https://rutracker.org", description: "Russian tracker (use VPN)" },
    { name: "1337x Music", url: "https://www.1377x.to/popular-music", description: "Music torrent section" },
    { name: "Deemix", url: "https://deemix.org/", description: "Free streaming downloads" },
  ];

  const torrentResources = [
    { name: "RARBG Mirror", url: "https://rarbg.to", description: "Popular torrent site" },
    { name: "1337x", url: "https://1337x.to", description: "General torrents" },
    { name: "YTS", url: "https://yts.mx", description: "High quality movies" },
    { name: "Torrent Galaxy", url: "https://en.torrentgalaxy-official.com/", description: "Wide selection" },
    { name: "Nyaa", url: "https://nyaa.si/", description: "Anime torrents" },
  ];

  const softwareResources = [
    { name: "GetIntoPC", url: "https://getintopc.com", description: "Adobe CC, Windows ISOs, everything" },
    { name: "Nsane Forums", url: "https://nsaneforums.com", description: "Underground crack forum" },
    { name: "CS RIN RU", url: "https://cs.rin.ru/forum/", description: "Russian hacker forum - all Steam cracks" },
  ];

  const animeResources = [
    { name: "AnimePahe", url: "https://animepahe.com", description: "Sub + Dub, minimal ads" },
    { name: "9Anime", url: "https://9anime.org.lv/", description: "Huge library, dubbed + subbed" },
    { name: "AniWave", url: "https://aniwave.com.pl/", description: "Minimalist, decent speed" },
    { name: "Nyaa Torrents", url: "https://nyaa.si", description: "Torrent goldmine with subtitles" },
    { name: "Gogoanime", url: "https://gogoanimez.to/", description: "Fastest for new episodes" },
  ];

  const mobileResources = [
    { name: "RevDL", url: "https://revdl.com", description: "Direct APK downloads, modded apps" },
    { name: "APKPure", url: "https://apkpure.com", description: "Official + some modded versions" },
    { name: "APKMirror", url: "https://www.apkmirror.com", description: "Legit, clean, official APKs" },
    { name: "Mobilism", url: "https://forum.mobilism.org", description: "Ultimate mobile pirate forum" },
    { name: "FilmPlus", url: "https://filmplusapk.pro/", description: "Netflix + Disney+ merged and free" },
    { name: "Spotify Premium", url: "https://spotifypremiumapk.pk/", description: "No ads, unlimited skips" },
  ];

  const communityResources = [
    { name: "r/PiratedGames", url: "https://www.reddit.com/r/PiratedGames/", description: "Game piracy community" },
    { name: "r/Piracy", url: "https://www.reddit.com/r/Piracy/", description: "General piracy discussions" },
    { name: "r/CrackWatch", url: "https://www.reddit.com/r/CrackWatch/", description: "Game crack updates" },
    { name: "r/FREEMEDIAHECKYEAH", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/", description: "Free media resources" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Spoils of War</h1>
            <p className="text-sm text-muted-foreground">Professional Resource Collection</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Complete Digital Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "Victory belongs to the most persevering." — Napoleon Bonaparte
          </p>
        </div>

        <ResourceSection
          title="Streaming & Movies"
          icon={<Tv className="h-6 w-6" />}
          quote="The best victories are those that require no fighting."
          links={streamingResources}
        />

        <ResourceSection
          title="PC & Console Games"
          icon={<Gamepad2 className="h-6 w-6" />}
          quote="Every battle is won before it is fought."
          links={gamingResources}
        />

        <ResourceSection
          title="Books & Academic Papers"
          icon={<BookOpen className="h-6 w-6" />}
          quote="Knowledge is power, and power is victory."
          links={bookResources}
        />

        <ResourceSection
          title="Music & Audio"
          icon={<Music className="h-6 w-6" />}
          quote="Music is the universal language of mankind."
          links={musicResources}
        />

        <ResourceSection
          title="Movie & TV Torrents"
          icon={<HardDrive className="h-6 w-6" />}
          quote="The spoils belong to those who dare to take them."
          links={torrentResources}
        />

        <ResourceSection
          title="Software & Tools"
          icon={<Shield className="h-6 w-6" />}
          quote="The right tools make victory inevitable."
          links={softwareResources}
        />

        <ResourceSection
          title="Anime Collection"
          icon={<Tv className="h-6 w-6" />}
          quote="Art is the highest form of hope."
          links={animeResources}
        />

        <ResourceSection
          title="Mobile Apps & Mods"
          icon={<Smartphone className="h-6 w-6" />}
          quote="Adapt or perish, now as ever, is nature's inexorable imperative."
          links={mobileResources}
        />

        <ResourceSection
          title="Communities & Updates"
          icon={<Users className="h-6 w-6" />}
          quote="United we stand, divided we fall."
          links={communityResources}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground mb-4">
            "Take what's yours. No begging. No excuses."
          </p>
          <Button variant="ghost" asChild className="gap-2">
            <a 
              href="https://github.com/ah4ddd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              Made by Ahad
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
