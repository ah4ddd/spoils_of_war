import { ThemeToggle } from "@/components/ThemeToggle";
import { ResourceSection } from "@/components/ResourceSection";
import { Github, Tv, Gamepad2, BookOpen, Music, HardDrive, Smartphone, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
    const streamingResources = [
        { name: "Fmovies", url: "https://wvw-fmovies.com/", description: "Dive in. Endless streams of gold, hidden gems, and forbidden classics, almost everything" },
        { name: "Sflix", url: "https://sflix.to", description: "High-def heaven. Every show, every movie, almost nothing missing. Peak indulgence" },
        { name: "Soap2Day", url: "https://ww25.soap2day.day/", description: "Old-school battlefield of streaming. Classics, hits, and cult favorites waiting to be plundered." },
        { name: "Cinego", url: "https://freeonlinehd.site/cinego/", description: "Crystal-clear HD streams" },
    ];

    const gamingResources = [
        { name: "FitGirl Repacks", url: "https://fitgirl-repacks.site", description: "Lean, mean, fully loaded game packs. Small size, legit AF—Pinnacle" },
        { name: "DODI Repacks", url: "https://dodi-repacks.site/", description: "Speed demon of repacks. Fast, clean, ready to drop straight into your rig" },
        { name: "SteamUnlocked", url: "https://steamunlocked.net", description: "Skip the grind,. Pre-installed, no strings, no Steam begging" },
        { name: "1337x Games", url: "https://1337x.to/popular-games", description: "Torrent kingdom. Find what everyone’s playing—rip it, own it, dominate." },
        { name: "Vimm's Lair", url: "https://vimm.net", description: "Retro consoles, ROMs, emulators. Time travel through gaming history, unshackled and free" },
        { name: "r/PiratedGames", url: "https://www.reddit.com/r/PiratedGames/", description: "Community. collections, updates, hot releases, whispers from the digital underground." },
    ];

    const bookResources = [
        { name: "Anna's Archive", url: "https://annas-archive.org", description: "Ultimate mashup of Sci-Hub and Z-Lib. Your gateway to every forbidden manuscript, journal, and mind-melting papers" },
        { name: "Library Genesis", url: "https://libgen.li/", description: "All the books you were told you couldn’t have. Scientific tomes, novels, classics—everything. Pure digital loot" },
        { name: "Welib", url: "https://welib.org/", description: "Fast, clean, organized—academic treasure at your fingertips" },
        { name: "Sci-Hub", url: "https://sci-hub.se", description: "Paywalls? Fuck them. The world’s locked science is yours to take. VPN in India required, but the war chest is worth it" },
    ];

    const musicResources = [
        { name: "Soulseek", url: "https://slsknet.org", description: "P2P powerhouse for digging deep into rare tracks, bootlegs, and underground music" },
        { name: "NewAlbumReleases", url: "https://newalbumreleases.net", description: "Your one-stop for the freshest, hottest albums the moment they drop" },
        { name: "Rutracker", url: "https://rutracker.org", description: "The Russian music vault—tons of albums, rarities, and classics. VPN recommended, but the payoff? Pure auditory ecstasy" },
        { name: "1337x Music", url: "https://www.1377x.to/popular-music", description: "Torrent paradise for every genre. Seeders high, quality insane. Grab what you need, and let the sound take over" },
        { name: "Deemix", url: "https://deemix.org/", description: "Stream, download, and crush limits. FLAC or MP3, playlists or singles—no ads, no bs, just pure filthy freedom" },
    ];

    const torrentResources = [
        { name: "1337x", url: "https://1337x.to", description: "The Bahemoth of torrent sites. Un-killable, reliable, and brimming with everything. One of the most trusted sources in the torrent underground." },
        { name: "YTS", url: "https://yts.mx", description: "The holy grail of compact movie torrents. YIFY’s ghost still lives here, offering pristine, Arthouse cinema, HD and 4K rips that barely take up space. Perfect for hoarders and collectors" },
        { name: "Torrent Galaxy", url: "https://en.torrentgalaxy-official.com/", description: "A beast of variety—movies, TV, anime, even fan-edits and obscure gems. A chaotic but beautiful sprawl of torrents, and surprisingly fast updates" },
        { name: "RARBG Mirror", url: "https://rargb.to/", description: "The fallen titan of torrenting, reborn through mirrors. Packed with high-quality, well-seeded torrents across movies, TV, and more. Still one of the most respected banners in the pirate fleet" },
        { name: "Nyaa", url: "https://nyaa.si/", description: "The one-stop citadel for anime pirates. Subbed, dubbed, rare rips, even raw Japanese broadcasts—all flood through here. If you’re into anime, this is where the river flows strongest" },
    ];

    const softwareResources = [
        { name: "GetIntoPC", url: "https://getintopc.com", description: "The vault never runs dry. Windows ISOs, Adobe CC, Office suites, cracked productivity giants, even obscure pro software. If you need it, it’s buried in here (90% of time, you'll only need this)" },
        { name: "Nsane Forums", url: "https://nsaneforums.com", description: "The smoky backroom of piracy. Forums stacked with loaders, patches, serials, and keygens for everything from antiviruses to VPNs. If you’re hunting for something rare, the whispers live here" },
        { name: "CS RIN RU", url: "https://cs.rin.ru/forum/", description: "The Russian hackers forge. A labyrinth of Steam emulators, crack discussions, bypasses, multiplayer fixes, and obscure repacks. It’s ugly, ruthless, and dripping with gold" },
    ];

    const animeResources = [
        { name: "AnimePahe", url: "https://animepahe.com", description: "Sharp, clean, no bullshit—sub + dub, minimal ads, straight to the vein" },
        { name: "9Anime", url: "https://9anime.org.lv/", description: "The behemoth library—subbed, dubbed, old, new, rare, mainstream. If it exists, it breathes here" },
        { name: "AniWave", url: "https://aniwave.com.pl/", description: "Minimalist, decent speed" },
        { name: "Nyaa Torrents", url: "https://nyaa.si", description: "Torrent goldmine, subs included, raw Japanese releases, full seasons, OVAs, movies. This is where real otaku go to bleed" },
        { name: "Gogoanime", url: "https://gogoanimez.to/", description: "The frontlines—fastest updates, latest episodes, sub-first, always. It’s the warhorse that never sleeps." },
    ];

    const mobileResources = [
        { name: "RevDL", url: "https://revdl.com", description: "Cracked and modded APKs. From premium apps to hacked games, it’s all here, no gatekeepers" },
        { name: "APKPure", url: "https://apkpure.com", description: "Giant vault of apps, both official and sometimes modded. Perfect for skipping Google Play’s leash and grabbing region-blocked treasures" },
        { name: "APKMirror", url: "https://www.apkmirror.com", description: "The clean face of piracy. Mostly official APKs. Safe, trustworthy, and great for sideloading without any corporate bloat. No cracks, just raw access" },
        { name: "Mobilism", url: "https://forum.mobilism.org", description: "The holy forum of cracked APKs. Premium apps, patched mods, even entire communities keeping shit alive long after the devs stop caring. The pirate’s marketplace" },
        { name: "FilmPlus", url: "https://filmplusapk.pro/", description: "Think Netflix, Disney+, HBO, Hulu, Prime — all stitched into one beast, stripped of ads, and delivered free. Streams in HD/4K, subtitles included" },
        { name: "Spotify Premium", url: "https://spotifypremiumapk.pk/", description: "Unlimited skips, offline downloads, zero ads. The exact same Spotify experience, only your pockets stay heavy" },
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
                        <h1 className="text-2xl font-bold tracking-tight">Ahad's Lair</h1>
                        <p className="text-sm text-muted-foreground">Digital Anarchy, Absolute Pleasure</p>
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Spoils of War
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Culture is not a commodity
                    </p>
                </div>

                <ResourceSection
                    title="Streaming & Movies"
                    icon={<Tv className="h-6 w-6" />}
                    quote=""
                    links={streamingResources}
                />

                <ResourceSection
                    title="PC & Console Games"
                    icon={<Gamepad2 className="h-6 w-6" />}
                    quote=""
                    links={gamingResources}
                />

                <ResourceSection
                    title="Books & Academic Papers"
                    icon={<BookOpen className="h-6 w-6" />}
                    quote=""
                    links={bookResources}
                />

                <ResourceSection
                    title="Music & Audio"
                    icon={<Music className="h-6 w-6" />}
                    quote=""
                    links={musicResources}
                />

                <ResourceSection
                    title="Movie & TV Torrents"
                    icon={<HardDrive className="h-6 w-6" />}
                    quote=""
                    links={torrentResources}
                />

                <ResourceSection
                    title="Software & Tools"
                    icon={<Shield className="h-6 w-6" />}
                    quote=""
                    links={softwareResources}
                />

                <ResourceSection
                    title="Anime Collection"
                    icon={<Tv className="h-6 w-6" />}
                    quote=""
                    links={animeResources}
                />

                <ResourceSection
                    title="Mobile Apps & Mods"
                    icon={<Smartphone className="h-6 w-6" />}
                    quote=""
                    links={mobileResources}
                />

                <ResourceSection
                    title="Communities & Updates"
                    icon={<Users className="h-6 w-6" />}
                    quote=""
                    links={communityResources}
                />
            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-8 text-center">
                    <p className="text-muted-foreground mb-4">
                        “Happiness is the feeling that power increases - that resistance is being overcome” ― Friedrich Nietzsche
                    </p>
                    <Button variant="ghost" asChild className="gap-2">
                        <a
                            href="https://github.com/ah4ddd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-1"
                        >
                            <Github className="h-4 w-4" />
                            <span>Made by Ahad (GitHub: ah4ddd)</span>
                            <a
                                href="https://github.com/ah4ddd/spoils_of_war"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline hover:text-primary"
                            >
                                This project is open source, feel free to contribute
                            </a>
                        </a>
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default Index;
