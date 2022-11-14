import React from 'react';
import Weather from "./weather"

const Hero = (props) => {
  return (
<div class="hero min-h-screen bg-base-200 font2">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/YTQMpSL/asd.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-1xl font-bold">Hai Manusia Gabut!</h1>
      <p class="py-6 text-left">Perkenalkan nama saya Fi Zilalil Huda, Biasa dipanggil, fizi, jay, pijay, biji, flia, akiyama nico dll. Tujuan saya bikin website ini hanya untuk gabut doang kok xixixi. dah itu aja bye</p>
      <a href="https://open.spotify.com/artist/3v9i54KNBivFwwthBvMj4C?si=qU5MifRGThWdQ5t_L4tf2w"><button class="btn btn-primary">Spotify</button></a> <span></span>
      <a href="https://osu.ppy.sh/u/Sandaran%20Langit"><button class="btn btn-primary">osu! Profile Page</button></a> <p></p> <span></span>
      <a href="https://www.instagram.com/fizilalilhuda_"><button class="btn btn-primary">Instagram</button></a> <span></span>
      <a href="https://fliaplia.bandcamp.com/"><button class="btn btn-primary">Bandcamp</button></a> <span></span>
      <a href="https://soundcloud.com/fliaplia"><button class="btn btn-primary">Soundcloud</button></a>
      <Weather/>
    </div>
  </div>
</div>

    );
};
export default Hero;