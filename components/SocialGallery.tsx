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
                <svg
                  width="55"
                  height="54"
                  viewBox="0 0 55 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto"
                >
                  <path
                    d="M18.3962 43.4807C18.3962 43.704 18.1411 43.8827 17.8196 43.8827C17.4536 43.9162 17.1986 43.7375 17.1986 43.4807C17.1986 43.2574 17.4536 43.0787 17.7752 43.0787C18.1079 43.0452 18.3962 43.2239 18.3962 43.4807ZM14.9476 42.9782C14.87 43.2016 15.0917 43.4584 15.4244 43.5254C15.7127 43.637 16.0454 43.5254 16.1119 43.3021C16.1784 43.0787 15.9677 42.8219 15.6351 42.7214C15.3468 42.6433 15.0252 42.7549 14.9476 42.9782ZM19.8488 42.7884C19.5272 42.8666 19.3054 43.0787 19.3387 43.3356C19.372 43.5589 19.6603 43.704 19.9929 43.6259C20.3145 43.5477 20.5363 43.3356 20.503 43.1122C20.4698 42.9001 20.1704 42.7549 19.8488 42.7884ZM27.1452 0C11.7651 0 0 11.7579 0 27.2452C0 39.6284 7.73992 50.225 18.7954 53.9545C20.2147 54.2113 20.7137 53.3292 20.7137 52.6034C20.7137 51.9111 20.6804 48.0923 20.6804 45.7474C20.6804 45.7474 12.9183 47.4223 11.2883 42.4199C11.2883 42.4199 10.0242 39.1706 8.20564 38.3332C8.20564 38.3332 5.66633 36.5801 8.38307 36.6136C8.38307 36.6136 11.1442 36.8369 12.6633 39.4944C15.0917 43.8045 19.1613 42.5651 20.747 41.8281C21.002 40.0416 21.7228 38.8021 22.5212 38.0652C16.3226 37.3729 10.0685 36.4684 10.0685 25.7267C10.0685 22.656 10.9113 21.1151 12.6855 19.1498C12.3972 18.424 11.4546 15.4315 12.9738 11.5681C15.2913 10.8423 20.625 14.5829 20.625 14.5829C22.8427 13.9576 25.2268 13.6338 27.5887 13.6338C29.9506 13.6338 32.3347 13.9576 34.5524 14.5829C34.5524 14.5829 39.8861 10.8311 42.2036 11.5681C43.7228 15.4427 42.7802 18.424 42.4919 19.1498C44.2661 21.1262 45.3528 22.6671 45.3528 25.7267C45.3528 36.5019 38.8216 37.3617 32.623 38.0652C33.6431 38.9473 34.5081 40.6222 34.5081 43.2462C34.5081 47.0092 34.4748 51.6655 34.4748 52.5811C34.4748 53.3069 34.9849 54.189 36.3931 53.9322C47.4819 50.225 55 39.6284 55 27.2452C55 11.7579 42.5252 0 27.1452 0ZM10.7782 38.5118C10.6341 38.6235 10.6673 38.8803 10.8558 39.0924C11.0333 39.2711 11.2883 39.3493 11.4325 39.2041C11.5766 39.0924 11.5433 38.8356 11.3548 38.6235C11.1774 38.4448 10.9224 38.3667 10.7782 38.5118Z"
                    fill="white"
                  />
                </svg>

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
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto"
                >
                  <path
                    d="M12.3136 55H0.908482V18.2801H12.3136V55ZM6.60491 13.2712C2.95871 13.2712 0 10.2511 0 6.60491C0 4.84933 0.699777 3.17969 1.93973 1.93973C3.17969 0.699777 4.86161 0 6.60491 0C8.34822 0 10.0301 0.699777 11.2701 1.93973C12.51 3.17969 13.2098 4.86161 13.2098 6.60491C13.2098 10.2511 10.2511 13.2712 6.60491 13.2712ZM54.9877 55H43.6071V37.125C43.6071 32.865 43.5212 27.4018 37.6775 27.4018C31.7478 27.4018 30.8393 32.0301 30.8393 36.8181V55H19.4464V18.2801H30.385V23.2891H30.5446C32.067 20.404 35.7868 17.3594 41.3359 17.3594C52.8761 17.3594 55 24.9587 55 34.8292V55H54.9877Z"
                    fill="white"
                  />
                </svg>

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
                <svg
                  width="55"
                  height="56"
                  viewBox="0 0 55 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto"
                >
                  <path
                    d="M27.5061 13.6423C19.7147 13.6173 13.3834 20.0402 13.3589 27.975C13.3344 35.9099 19.6411 42.3577 27.4325 42.3827C35.2239 42.4077 41.5552 35.9848 41.5798 28.05C41.6043 20.1151 35.2975 13.6673 27.5061 13.6423ZM27.4325 18.6906C32.4877 18.6656 36.5982 22.8267 36.6227 27.975C36.6472 33.1233 32.5613 37.3094 27.5061 37.3344C22.4509 37.3594 18.3405 33.1983 18.316 28.05C18.2914 22.9017 22.3773 18.7156 27.4325 18.6906ZM38.8926 13.055C38.8926 11.2056 40.365 9.70612 42.181 9.70612C43.9969 9.70612 45.4693 11.2056 45.4693 13.055C45.4693 14.9044 43.9969 16.4039 42.181 16.4039C40.365 16.4039 38.8926 14.9044 38.8926 13.055ZM54.8067 16.4539C54.5982 11.9679 53.592 7.9942 50.365 4.72029C47.1503 1.44639 43.2485 0.421734 38.8436 0.196809C34.3037 -0.065603 20.6963 -0.065603 16.1564 0.196809C11.7638 0.409238 7.86196 1.43389 4.63497 4.7078C1.40798 7.9817 0.41411 11.9554 0.193252 16.4414C-0.0644172 21.0648 -0.0644172 34.9227 0.193252 39.5461C0.40184 44.0321 1.40798 48.0058 4.63497 51.2797C7.86196 54.5536 11.7515 55.5783 16.1564 55.8032C20.6963 56.0656 34.3037 56.0656 38.8436 55.8032C43.2485 55.5908 47.1503 54.5661 50.365 51.2797C53.5798 48.0058 54.5859 44.0321 54.8067 39.5461C55.0644 34.9227 55.0644 21.0773 54.8067 16.4539ZM48.9417 44.507C47.9847 46.9562 46.1319 48.843 43.7147 49.8302C40.0951 51.2922 31.5061 50.9548 27.5061 50.9548C23.5061 50.9548 14.9049 51.2797 11.2975 49.8302C8.89264 48.8555 7.03988 46.9686 6.07055 44.507C4.63497 40.8207 4.96626 32.0736 4.96626 28C4.96626 23.9264 4.64724 15.1668 6.07055 11.493C7.02761 9.04385 8.88037 7.15698 11.2975 6.16981C14.9172 4.7078 23.5061 5.04519 27.5061 5.04519C31.5061 5.04519 40.1074 4.72029 43.7147 6.16981C46.1196 7.14448 47.9724 9.03135 48.9417 11.493C50.3773 15.1793 50.046 23.9264 50.046 28C50.046 32.0736 50.3773 40.8332 48.9417 44.507Z"
                    fill="white"
                  />
                </svg>

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
                  <WaveformIcon className="absolute top-3 right-4" />

                  <h5 className="text-white/50 uppercase text-xs tracking-widest font-bold mb-3">
                    What I&apos;m Listening To
                  </h5>

                  <div className="flex flex-row w-full items-center gap-5">
                    {loading ? (
                      <div className="w-16 h-16 bg-white/10 animate-pulse rounded-lg" />
                    ) : topTrack ? (
                      <Image
                        src={topTrack.albumImageUrl}
                        alt="Album Art"
                        width={80}
                        height={80}
                        className="rounded-lg shadow-lg h-full w-auto"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-white/20"
                        >
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </svg>
                      </div>
                    )}

                    <div className="flex-1 overflow-hidden space-y-0.5">
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
                  <svg
                    width="55"
                    height="56"
                    viewBox="0 0 55 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5 0C12.3085 0 0 12.5323 0 28C0 43.4677 12.3085 56 27.5 56C42.6915 56 55 43.4677 55 28C55 12.5323 42.6915 0 27.5 0ZM38.6663 41.1984C38.2006 41.1984 37.9123 41.0516 37.4798 40.7919C30.5605 36.5468 22.5101 36.3661 14.5595 38.0258C14.127 38.1387 13.5615 38.3194 13.2399 38.3194C12.1643 38.3194 11.4879 37.45 11.4879 36.5355C11.4879 35.3726 12.1643 34.8194 12.996 34.6387C22.0776 32.5952 31.3589 32.7758 39.2762 37.5968C39.9526 38.0371 40.3518 38.4323 40.3518 39.4597C40.3518 40.4871 39.5645 41.1984 38.6663 41.1984ZM41.6492 33.7919C41.0726 33.7919 40.6845 33.5323 40.2853 33.3177C33.3548 29.1403 23.0202 27.4581 13.8276 29.9984C13.2954 30.1452 13.0071 30.2919 12.5081 30.2919C11.3216 30.2919 10.3569 29.3097 10.3569 28.1016C10.3569 26.8935 10.9335 26.0919 12.0756 25.7645C15.1583 24.8839 18.3075 24.229 22.9204 24.229C30.1169 24.229 37.0696 26.0468 42.5474 29.3661C43.4456 29.9081 43.8004 30.6081 43.8004 31.5903C43.7893 32.8097 42.8579 33.7919 41.6492 33.7919ZM45.0867 25.1887C44.5101 25.1887 44.1552 25.0419 43.6562 24.7484C35.7611 19.95 21.6452 18.7984 12.5081 21.3952C12.1089 21.5081 11.6099 21.6887 11.0776 21.6887C9.61391 21.6887 8.49395 20.5258 8.49395 19.0242C8.49395 17.4887 9.4254 16.6194 10.4234 16.3258C14.3266 15.1629 18.6956 14.6097 23.4526 14.6097C31.5474 14.6097 40.0302 16.3258 46.2288 20.0065C47.0938 20.5145 47.6593 21.2145 47.6593 22.5581C47.6593 24.0935 46.4395 25.1887 45.0867 25.1887Z"
                      fill="white"
                    />
                  </svg>

                  <div className="w-full flex flex-col gap-5">
                    <h5 className="font-bold text-2xl uppercase text-left mr-auto text-white">
                      My psychologically
                      <br />
                      revealing personality
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialGallery;
