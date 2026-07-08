import { useEffect, useState } from "react";
import { EmailIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "../assets/icons";
import greatWall from "../assets/img/great-wall.jpg";
import harbin from "../assets/img/harbin.jpg";
import shanghai from "../assets/img/shanghai.jpg";
import taipei from "../assets/img/taipei.jpg";
import taipei101 from "../assets/img/taipei101.jpg";
import troll from "../assets/img/troll.jpg";
import website from "../assets/img/website.png";
import xian from "../assets/img/xian.jpg";

type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  spanExtraColumn: boolean;
};

function About() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto>();

  const photos: GalleryPhoto[] = [
    {
      id: "xian",
      src: xian,
      alt: "Looking up from below at the outside of Drum Tower in Xi'An.",
      spanExtraColumn: true
    },
    {
      id: "harbin",
      src: harbin,
      alt: "Leo standing with arms spread wide in front of a large illuminated ice sculpture. The ice sculpture is shaped like Saint Sophia's Church in Harbin.",
      spanExtraColumn: false
    },
    {
      id: "taipei101",
      src: taipei101,
      alt: "Taipei 101 at sunset.",
      spanExtraColumn: false
    },
    {
      id: "great-wall",
      src: greatWall,
      alt: "Looking through two parapets of the Great Wall of China. Another part of the wall can be seen in the distance.",
      spanExtraColumn: true
    },
    {
      id: "shanghai",
      src: shanghai,
      alt: "The Shanghai skyline at night, taken from aboard a Huangpu river ferry.",
      spanExtraColumn: true
    }
  ];

  useEffect(() => {
    if (!selectedPhoto) return;

    const modal = document.getElementById("img-gallery-modal") as HTMLDialogElement;
    modal.showModal();
  }, [selectedPhoto]);

  return (
    <div className="flex-1 flex flex-col justify-start items-center gap-8 mb-16">
      <div
        className="hero h-[50vh] lg:mb-0 sm:mb-12"
        style={{
          backgroundImage: `url(${troll}`
        }}>
        <div className="hero-overlay max-h-lg"></div>
        <div className="hero-content w-full h-full justify-end items-center">
          <div
            className="rounded-box bg-neutral/20 backdrop-blur-xs
             p-10 text-right text-neutral-content shadow-2xl">
            <h1 className="py-4 text-7xl font-bold">Hi, I'm Leo.</h1>
            <span className="text-rotate lg:text-lg text-2xl">
              <span className="text-right justify-items-end">
                <span>Software Engineer</span>
                <span>Musician</span>
                <span>Language Learner</span>
                <span>Traveler</span>
                <span>Gamer</span>
                <span>Foodie</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row lg:mx-56 mx-36 gap-x-16">
          <img
            src={taipei}
            alt="Leo looking at the camera slightly smiling with his hand resting on a railing. Behind him is the city of Taipei."
            className="max-w-sm rounded-box shadow-sm"
          />
          <div className="lg:my-0 my-2">
            <h1 className="text-2xl font-bold lg:text-left text-center">About Me</h1>
            <p className="py-2 pt-6 lg:text-left text-center">
              I'm a software engineer based in Seattle, WA. I'm passionate about solving complex problems and utilizing
              technology to help others.
            </p>

            <p className="py-2 lg:text-left text-center">
              I graduated from Whitworth University with a BSc. in Computer Science in 2020.
            </p>
            <p className="py-2 lg:text-left text-center">
              In my free time, I'm usually playing piano or guitar, studying Mandarin Chinese, or working through my
              super long backlog of video games. I'm also a huge Seattle Seahawks fan!
            </p>
            <div className="mt-4 mx-auto lg:mx-0 flex w-fit flex-col items-center justify-center gap-4">
              <p className="font-semibold self-center">Some places you can find me:</p>
              <div className="flex gap-4">
                <a
                  className="btn btn-primary btn-outline"
                  href="mailto:leo@lbarry.dev"
                  target="_blank">
                  <EmailIcon />
                  Email
                </a>
                <a
                  className="btn btn-primary btn-outline"
                  href="https://www.linkedin.com/in/leo-barry/"
                  target="_blank">
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  className="btn btn-primary btn-outline"
                  href="https://github.com/lbarry00/"
                  target="_blank">
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  className="btn btn-primary btn-outline"
                  href="https://www.instagram.com/leobarry00/"
                  target="_blank">
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row justify-center items-start lg:mx-56 mx-36 gap-x-16">
          <div className="lg:my-0 my-2 flex flex-col gap-4">
            <h1 className="text-2xl font-bold lg:text-left text-center">What I'm Building</h1>
            <p className=" lg:text-left text-center">
              I love building software that helps people and doesn't compromise on performance or usability.
            </p>
            <p className="lg:text-left text-center">
              These are just a couple of the projects that keep me busy outside of work.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <div className="card bg-base-100 w-72 shadow-sm">
              <figure className="h-40">
                <img
                  src={website}
                  alt="A screenshot of the home page of this website"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Portfolio Website</h2>
                <p>Built with TypeScript, React, Tailwind, and daisyUI.</p>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm">
              <div className="h-40 flex items-center justify-center bg-base-300 rounded-box rounded-b-none">
                <span className="text-5xl">🚧</span>
              </div>
              <div className="card-body">
                <h2 className="card-title">Web App for Chinese Teachers</h2>
                <p>
                  A fullstack solution that combines my passion for improving workflows and my interest in learning
                  Chinese.
                </p>
                <p>More info coming soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col justify-center items-start lg:mx-56 mx-36 gap-x-16">
          <div className="lg:my-0 my-2">
            <h1 className="text-2xl font-bold lg:text-left text-center">Travels</h1>
            <p className="py-2 pt-6 lg:text-left text-center">
              I want to see the world and learn about other cultures. Here are some cool pictures from my trips so far,
              hopefully more to come!
            </p>
            <p className="py-2 lg:text-left text-center italic text-sm">(Click to enlarge.)</p>
          </div>
          <div className="lg:my-0 my-8 flex self-center lg:flex-row flex-col justify-center items-center gap-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className={`rounded-box overflow-hidden ${photo.spanExtraColumn ? "col-span-2" : ""}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="max-h-64 w-full object-cover transition duration-300 hover:cursor-pointer hover:scale-110"
                    onClick={() => setSelectedPhoto(photo)}
                  />
                </div>
              ))}
            </div>

            <dialog
              id="img-gallery-modal"
              className="modal">
              <div className="modal-box max-w-none w-auto">
                <img
                  key={selectedPhoto?.id}
                  src={selectedPhoto?.src}
                  alt={selectedPhoto?.alt}
                  className="rounded-box max-w-[90vw] max-h-[85vh] object-contain"
                />
                <p className="m-2 text-sm">Press ESC or click anywhere outside to close. </p>
              </div>
              <form
                method="dialog"
                className="modal-backdrop">
                <button></button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-row-reverse lg:mx-56 mx-24 gap-x-16 items-start">
          <iframe
            src="https://www.youtube-nocookie.com/embed/CO39m5KJtqA?controls=1"
            className="aspect-video w-1/2 rounded-box"
            allowFullScreen
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin"
          />
          <div className="lg:my-0 my-2">
            <h1 className="text-2xl font-bold lg:text-left text-center">Language Learning</h1>
            <p className="py-2 pt-6 lg:text-left text-center">
              Although I've been studying Mandarin Chinese for many years, I still feel like{" "}
              <span
                className="tooltip text-secondary font-bold"
                data-tip="Learning Chinese is really a never-ending journey!">
                学习中文真是学无止境！
              </span>
            </p>
            <p className="py-2 lg:text-left text-center">
              I even appeared on an all-Chinese podcast where I talk about my language learning journey, travels, and
              more. Check it out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
