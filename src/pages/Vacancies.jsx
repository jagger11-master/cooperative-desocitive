import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/charwe.png";
import member1 from "../assets/charwe.jpg";
import member2 from "../assets/crey.jpg";
import member3 from "../assets/me.jpg";
import member4 from "../assets/kelvin.jpg";

export default function Vacancies() {
  const navigate = useNavigate();
  const [likes, setLikes] = useState({});

  const members = [
    { name: "Ramadhan-charwe", role: "CEO", image: member1, bio: "Passionate storyteller and media lead." },
    { name: "Creyson-Ranatus", role: "Director", image: member2, bio: "Visual effects and creative specialist." },
    { name: "jagger-master", role: "CTO", image: member3, bio: "Technology and systems expert." },
    { name: "kelvin-Musilimu", role: "Manager", image: member4, bio: "Operations and client relations." }
  ];

  const scrapedVideos = [
    { id: 1, title: "Media Production Highlights", platform: "instagram", url: "https://instagram.com" },
    { id: 2, title: "Charwe Documentary 2024", platform: "youtube", url: "https://youtube.com" },
    { id: 3, title: "Behind the Scenes Fun", platform: "tiktok", url: "https://tiktok.com" },
    { id: 4, title: "Community Branding Project", platform: "facebook", url: "https://facebook.com" }
  ];

  const toggleLike = (id) => setLikes(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      
      <nav className="p-5 flex justify-between items-center bg-white border-b sticky top-0 z-50">
        <button 
          onClick={() => navigate(-1)} 
          className="text-base font-bold text-slate-800 flex items-center gap-2 hover:text-orange-600 transition-colors"
        >
          Back <span className="text-xl">
          </span>
        </button>
      </nav>

      <section className="p-8 bg-slate-50 border-b">
        <h2 className="text-sm font-black mb-8 uppercase tracking-[0.25em] text-slate-500 border-l-4 border-orange-600 pl-4">
          Latest  Stories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {scrapedVideos.map((video) => (
            <div key={video.id} className="flex flex-col group">
              <div className="w-full aspect-[4/5] bg-white border border-slate-200 rounded-lg relative overflow-hidden flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-slate-400 uppercase">Video Preview</span>
                <button 
                  onClick={() => toggleLike(video.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full shadow-md z-10 transition-all ${likes[video.id] ? 'bg-red-500 text-white' : 'bg-white/90 text-slate-400'}`}
                >
                  ♥
                </button>
              </div>
              <div className="py-4">
                <h4 className="font-bold text-sm text-slate-900 truncate mb-1">{video.title}</h4>
                <p className="text-orange-600 text-xs font-black uppercase tracking-wider">{video.platform}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-white">
        <h2 className="text-sm font-black mb-8 uppercase tracking-[0.25em] text-slate-500 border-l-4 border-orange-600 pl-4">
          Get to Know Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full aspect-[4/5] overflow-hidden bg-slate-100 rounded-lg shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="py-5">
                <h3 className="font-extrabold text-lg text-slate-900 leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 text-xs font-black uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 italic">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black p-10 border-t border-white/5 text-center mt-auto">

                   <address className="not-italic text-sm text-slate-300">
                          Email: <a href="mailto:Supportcharwemedia@gmail.com" className="hover:text-orange-600 transition-colors">
                                              Supportcharwemedia@gmail.com
                                </a>
                       <br />
                                Phone: <a href="tel:+255698162028" className="hover:text-orange-600 transition-colors">
                                          +255 698 162 028
                                       </a>
                  </address>
                  <small className="not-italic text-sm text-slate-300"  >&charwe-media Co.</small>

      </footer>
    </div>
  );
}
