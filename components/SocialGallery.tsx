"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  GlassyPurple,
  GlassyBlue,
  GlassyPink,
  GlassyGreen,
} from "./SocialBackgrounds";
import { Button } from "./ui/button";
import { WaveformIcon } from "./WaveformIcon";
import {
  GitHubLargeIcon,
  LinkedInLargeIcon,
  InstagramLargeIcon,
  SpotifyLargeIcon,
  MusicNoteIcon,
} from "@/constants";

interface TopTrack {
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

function SocialGallery() {
  const [topTrack, setTopTrack] = useState<TopTrack | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTrack = async () => {
      try {
        const response = await fetch("/api/spotify/top-track");
        if (response.ok) {
          const data = await response.json();
          setTopTrack(data);
        }
      } catch (error) {
        console.error("Error fetching top track:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTrack();
  }, []);

  return (
    <section className="section-parent py-16">
      <div className="section-child">
        <h3 className="text-xl font-bold mb-8 uppercase tracking-tight text-white text-center">
          Where you can find me
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <div className="relative w-full h-[300px] group overflow-hidden rounded-[30px] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <GlassyPurple className="absolute inset-0 w-full h-full z-0" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="flex flex-col w-full h-full justify-between">
                <GitHubLargeIcon className="ml-auto text-white" />

                <h5 className="font-bold text-2xl uppercase text-white">
                  My Developer Personality
                </h5>

                <Link
                  href="https://github.com/ryanbakker"
                  target="_blank"
                  className="ml-auto"
                >
                  <Button size="lg" variant="kinetic" className="px-10">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="relative w-full h-[300px] group overflow-hidden rounded-[30px] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <GlassyBlue className="absolute inset-0 w-full h-full z-0" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="flex flex-col w-full h-full justify-between">
                <LinkedInLargeIcon className="ml-auto text-white" />

                <h5 className="font-bold text-2xl uppercase text-white">
                  My corporate Personality
                </h5>

                <Link
                  href="https://linkedin.com/in/ryan-bakker"
                  target="_blank"
                  className="ml-auto"
                >
                  <Button size="lg" variant="kinetic" className="px-10">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="relative w-full h-[300px] group overflow-hidden rounded-[30px] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <GlassyPink className="absolute inset-0 w-full h-full z-0" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="flex flex-col w-full h-full justify-between">
                <InstagramLargeIcon className="ml-auto text-white" />

                <h5 className="font-bold text-2xl uppercase text-white">
                  My Photographer Personality
                </h5>

                <Link
                  href="https://www.instagram.com/rm_bakker/"
                  target="_blank"
                  className="ml-auto"
                >
                  <Button size="lg" variant="kinetic" className="px-10">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Spotify Card (Full Width) */}
          <div className="relative md:col-span-3 w-full h-full group overflow-hidden rounded-[30px] border border-[#1BA04A]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <GlassyGreen className="absolute inset-0 w-full h-full z-0" />
            <div className="relative z-10 w-full h-full flex flex-row items-center justify-between p-6 md:p-10 -mt-1">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 h-full w-full">
                <div className="h-full bg-[#161917] border border-[#1BA04A] rounded-2xl p-5 flex flex-col justify-between min-w-[300px] md:min-w-[450px] w-full relative">
                  <WaveformIcon className="absolute top-3 right-4 text-white" />

                  <h5 className="text-white/50 uppercase text-xs tracking-widest font-bold mb-3">
                    What I&apos;m Listening To
                  </h5>

                  <div className="flex flex-col md:flex-row w-full items-center gap-5">
                    {loading ? (
                      <div className="w-16 h-16 bg-white/10 animate-pulse rounded-lg" />
                    ) : topTrack ? (
                      <Image
                        src={topTrack.albumImageUrl}
                        alt="Album Art"
                        width={250}
                        height={250}
                        className="rounded-lg shadow-lg h-auto w-auto mt-2 md:mt-0"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <MusicNoteIcon className="text-white/20" />
                      </div>
                    )}

                    <div className="flex-1 overflow-hidden space-y-0.5 w-full md:w-auto">
                      <h6 className="text-white font-bold text-lg truncate">
                        {loading
                          ? "Loading..."
                          : topTrack?.title || "No track found"}
                      </h6>
                      <p className="text-white/60 text-sm truncate mb-3">
                        {loading
                          ? "Please wait"
                          : topTrack?.artist || "Spotify API"}
                      </p>

                      {topTrack && (
                        <Link href={topTrack.songUrl} target="_blank">
                          <Button
                            size="sm"
                            className="bg-white hover:bg-white/80 text-black font-bold rounded-lg px-6"
                          >
                            Listen Now
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-full justify-between items-end w-full">
                  <SpotifyLargeIcon className="text-white hidden md:block" />

                  <div className="w-full flex flex-col gap-5">
                    <h5 className="font-bold text-xl md:text-2xl uppercase text-left mr-auto text-white mt-3 md:mt-0">
                      My psychologically
                      <br />
                      revealing personality
                    </h5>

                    <Link
                      href="https://open.spotify.com/user/31cgbozvcwgbz5xhlpjogd32wiqe?si=55cfba08ec2d4bf0"
                      target="_blank"
                      className="ml-auto w-full md:w-fit"
                    >
                      <Button
                        size="lg"
                        variant="kinetic"
                        className="px-10 w-full"
                      >
                        View{" "}
                        <span className="block md:aria-hidden:">Spotify</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialGallery;
