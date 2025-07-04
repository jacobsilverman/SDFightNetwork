import React, { useState } from 'react';
import "./Videos.scss";
import { useEffect } from "react";

const Videos = () => {
  // Sample Facebook video data - you can replace these with your actual Facebook video URLs
  const [videos] = useState([
    {
      id: 1,
      title: "UFC Fighter Ian Garry MMA Combo",
      description: "Rate this MMA combo by UFC fighter Ian Garry.",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/656279577316923" data-width="320" data-show-text="true" onLoad="console.log("test")"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Ian+Garry+MMA+Combo"
    },
    {
      id: 2,
      title: "Muay Thai Training Session",
      description: "Professional Muay Thai training techniques and drills",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/1830315871135623" data-width="320" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Muay+Thai+Training"
    },
    {
      id: 3,
      title: "MMA Fight Highlights",
      description: "Best moments from recent MMA fights in San Diego",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/1681791509168719" data-width="320" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=MMA+Highlights"
    },
    {
      id: 4,
      title: "Boxing Technique Breakdown",
      description: "Detailed breakdown of advanced boxing techniques",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/985706856753587" data-width="320" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Boxing+Techniques"
    },
    {
      id: 5,
      title: "Fight Night Event Coverage",
      description: "Complete coverage of the latest fight night event",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/1339835760426704" data-width="320" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Fight+Night"
    },
    {
      id: 6,
      title: "Training Camp Documentary",
      description: "Behind the scenes look at fighter training camps",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/1205929691262194" data-width="320" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Training+Camp"
    },
    {
      id: 7,
      title: "Training Camp Documentary",
      description: "Behind the scenes look at fighter training camps",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/1404880823993396" data-width="320" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Training+Camp"
    },
    {
      id: 8,
      title: "Training Camp Documentary",
      description: "Behind the scenes look at fighter training camps",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/1131497715348190" data-width="320" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Training+Camp"
    },
    {
      id: 9,
      title: "Training Camp Documentary",
      description: "Behind the scenes look at fighter training camps",
      facebookEmbed: '<div class="fb-post" data-href="https://www.facebook.com/reel/1436730174156036" data-width="280" data-show-text="true"></div>',
      thumbnail: "https://via.placeholder.com/560x315/1a1a1a/ffffff?text=Training+Camp"
    }
  ]);

  useEffect(() => {
    // Parse Facebook XFBML after component mounts or updates
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [videos]);


  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="page-title">
          Fighting <span>Videos</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Watch the latest fighting videos, training sessions, and match highlights from San Diego's fight community. Stay updated with local events and professional techniques.
        </p>
      </section>

      {/* Divider */}
      <div className="my-12 border-t border-primary-color w-32 mx-auto" />

      {/* Videos Grid */}
      <section className="videos-section">
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-container">
                {/* Facebook embed for the first video, fallback to iframe for others */}
                <div dangerouslySetInnerHTML={{ __html: video.facebookEmbed }} />
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 mb-10">
        <h2 className="text-2xl font-semibold mb-4 color-primary">Want to Share Your Videos?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Are you a fighter, trainer, or gym owner with amazing content to share? Contact us to have your videos featured on our platform.
        </p>
        <a 
          href="/Contact" 
          className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-900 font-semibold rounded-full shadow-md transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Videos; 