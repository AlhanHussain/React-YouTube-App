// import logo from "./logo.svg";
import "./App.css";
import Channel from "./data";
import VideoCard from "./VideoCard";

function App() {
  const videos = [
    {
      id: 1,
      title: "Goku unleashes UI - Ultra Instinct",
      thumbnailUrl:
            "https://wallpapers.com/images/high/goku-in-ultra-instinct-form-9x05pde7oee6z4ga.webp",
        likes: 3000 / 1000,
      views: 7000 / 1000,
      channelName: "Fuji Television",
      channelLogoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Fuji_TV_logo.svg/1200px-Fuji_TV_logo.svg.png",
    },
    {
      id: 2,
      title: "KGF 2 trailer",
      thumbnailUrl:
        "https://cdn.tollywood.net/wp-content/uploads/2021/03/KGF-2-gives-Yash-unique-International-record.jpg",
      likes: 2000 / 1000,
      views: 4000 / 1000,
      channelName: "ZEE5",
      channelLogoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Zee5_Official_logo.svg/1200px-Zee5_Official_logo.svg.png",
    },
    {
      id: 3,
      title: "Avengers End Game ",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dWElb1EginnQyrw1f60m6M1mCc_1hPQEwQ&usqp=CAU",
      likes: 1000 / 1000,
      views: 4000 / 1000,
      channelName: "Marvel Studios Productions",
      channelLogoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbZEzPIEMwlp8EmDER6yqNoJAplGcFUlGCg&usqp=CAU",
    },
    {
      id: 4,
      title: "Spider Man - No way Home",
      thumbnailUrl:
        "https://i.pinimg.com/550x/20/56/ae/2056aeced2af1efc21523efa913045b1.jpg",
      likes: 29000 / 1000,
      views: 340000 / 1000,
      channelName: "MARVEL SONY",
      channelLogoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEeXYTjK6YQjpjkaeppUtHX5bSPw-zAV0bQ&usqp=CAU",
    },
    {
      id: 5,
      title: "India's Winning Strick",
      thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUXxVn_-H2HL2tQ6FyOMwe-B83BGdpa7KVw&usqp=CAU",
      likes: 7000 / 1000,
      views: 21000 / 1000,
      channelName: "Crickterz",
      channelLogoUrl:
      "https://masterbundles.com/wp-content/uploads/2023/05/ai11-1-451-1024x1024.jpg",
    },
    {
      id: 6,
      title: "Top Bollywood Songs",
      thumbnailUrl:
        "https://c.saavncdn.com/908/Top-20-Most-Viewed-Songs-Of-The-Decade-2010-2019--Hindi-2020-20200206094000-500x500.jpg",
      likes: 46700 / 1000,
      views: 340000 / 1000,
      channelName: "Clip Songs",
      channelLogoUrl:
        "https://www.shutterstock.com/image-vector/vector-logo-music-100nw-397126390.jpg",
    },
    {
      id: 7,
      title: "RRR Dosti Video Song",
      thumbnailUrl:"https://media.timeout.com/images/105903326/750/422/image.jpg",
      likes: 68390 / 1000,
      views: 603048 / 1000,
      channelName: "Sony Fox",
      channelLogoUrl:"https://upload.wikimedia.org/wikipedia/commons/3/39/Sony-movie-channel-2017-logo.png",
    },
    {
      id: 8,
      title: "Peaky Blinders Movie",
      thumbnailUrl: "https://assets.gqindia.com/photos/5cdc5de86b46cace92597ad9/16:9/w_2560%2Cc_limit/Peeky-Blinders-Movie-Trailer.jpg",
      likes: 40370 / 1000,
      views: 204790 / 1000,
      channelName: "Amazon Prime",
      channelLogoUrl:
        "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png",
    },
    {
      id: 9,
      title: "Best Of Football",
      thumbnailUrl:
        "https://www.knowhowsoccer.com/wp-content/uploads/2016/01/fcbarcelona_teamplay-1024x486.jpg",
      likes: 84005 / 1000,
      views: 221525 / 1000,
      channelName: "Healer",
      channelLogoUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logos-2023-design-template-ba96ccb6c8645a69c9eef50607d84d34_screen.jpg?ts=1667330722",
    },
    {
      id: 10,
      title: "Goku Vs Giren",
      thumbnailUrl:
        "https://staticg.sportskeeda.com/editor/2022/05/29edb-16538752864965-1920.jpg",
      likes: 20000 / 1000,
      views: 24000 / 1000,
      channelName: "Disney Saiyan ",
      channelLogoUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69c84613-a1a3-4e06-ab40-bb4889dc214a/deyq3dk-28f104e3-ad8c-4ad1-8f7e-9a695bc7d035.png/v1/fit/w_828,h_428/disney_channel_japanese_logo__2019_present_by_xxsteamboy_deyq3dk-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE3IiwicGF0aCI6IlwvZlwvNjljODQ2MTMtYTFhMy00ZTA2LWFiNDAtYmI0ODg5ZGMyMTRhXC9kZXlxM2RrLTI4ZjEwNGUzLWFkOGMtNGFkMS04ZjdlLTlhNjk1YmM3ZDAzNS5wbmciLCJ3aWR0aCI6Ijw9MTE5MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.g51GY0OHcRyNrDnC8I7bqCUw8PDWFja858kgzrViF_I",
    },
    {
      id: 11,
      title: "IPL Best 6s",
      thumbnailUrl:
        "https://hindi.oneindia.com/img/2023/04/faf-1681141853.jpg",
      likes: 17000 / 1000,
      views: 10000 / 1000,
      channelName: "Hotstar",
      channelLogoUrl:
        "https://img.etimg.com/thumb/msid-68490916,width-300,height-225,imgsize-55482,,resizemode-75/hotstar-agencies.jpg",
    },
    {
      id: 12,
      title: "Madara The Ghost",
      thumbnailUrl:
        "https://wallpapercave.com/dwp1x/wp2576234.jpg",
      likes: 130000 / 1000,
      views: 224000 / 1000,
      channelName: " Uchiha Club",
      channelLogoUrl:
        "https://seeklogo.com/images/U/uchiha-clan-logo-09D9ACB23C-seeklogo.com.png",
    },
    {
      id: 13,
      title: "Animal Trailer",
      thumbnailUrl:
        "https://i.ytimg.com/vi/Dydmpfo68DA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7fM_SdLSqlePDwwKGGArdhZmURQ",
      likes: 56278 / 1000,
      views: 521511 / 1000,
      channelName: "T-Series",
      channelLogoUrl:
        "https://yt3.ggpht.com/ytc/APkrFKYkn9Q9VM_xwhxA6ik3lGkWyRZ5N62fLHtuuUuy2w=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 14,
      title: "Hydrabadi Biryani",
      thumbnailUrl:
        "https://static.wixstatic.com/media/91e241_0cf76aa5613b4055be2f922f71edeaa0~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ustaadi%20Hyderabadi%20Veg%20Biryani.jpg",
      likes: 13000 / 1000,
      views: 23000 / 1000,
      channelName: "Foodie",
      channelLogoUrl:
        "https://thumbs.dreamstime.com/z/foodie-chef-logo-graphic-20100575.jpg?w=992",
    },
    {
      id: 15,
      title: "Madara vs Shinobi",
      thumbnailUrl:
        "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2021/05/legiao__izBuS1LOKq7.png.webp",
      likes: 27728 / 10008,
      views: 515260 / 1000,
      channelName: "Crunchy Roll ",
      channelLogoUrl:
        "https://yt3.ggpht.com/ytc/APkrFKaVnvc8KleIdBDnGmKV6ARBeuArPZaHuE2wyYWlRw=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 16,
      title: "Prison Break",
      thumbnailUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4031709e-3e82-4022-9d23-7a295ce73501/d62d2gk-89a84a7f-c46e-4fe3-b8a1-44f5f14f88d9.png/v1/fit/w_630,h_512,q_70,strp/prison_break_folder_icon_by_kasbandi_d62d2gk-375w-2x.jpg",
      likes: 5000 / 1000,
      views: 80000 / 1000,
      channelName: "NetFlix",
      channelLogoUrl:
        "https://wearescs.com/wp-content/uploads/2021/11/116.Netflix_Logo_07.30-1024x635.jpg",
    },
    {
      id: 17,
      title: "Top 5 Smartest kills  Death Note",
      thumbnailUrl:
        "https://i.ytimg.com/vi/hllsOtU1CEA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcLUOrnis-WejCviUu6sh4I8taHA",
      likes: 245000 / 1000,
      views: 323000 / 1000,
      channelName: "Clue Analysis ",
      channelLogoUrl:
        "https://yt3.ggpht.com/xvhUvCYBUcUyVtMmbBxgfUxF8IcBbfcCcdX5ugqdlyfl-8IpvWBEgk1DG7718zo8zLgwq5hyfQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 18,
      title: "Bigg Boss",
      thumbnailUrl: "https://static.toiimg.com/thumb/104430224.cms?width=680&height=512&imgsize=125352",

      likes: 54551 / 1000,
      views: 115250 / 1000,
      channelName: "Jio tv+",
      channelLogoUrl:
        "https://images.firstpost.com/wp-content/uploads/2020/07/jio-tvplus-1280.jpg?impolicy=website&width=640&height=363",
    },
    {
      id: 19,
      title: "BB ki Wines",
      thumbnailUrl:
        "https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/07/30204151/best-of-bb-ki-vines-1152x759.png",
      likes: 23000 / 1000,
      views: 55000 / 1000,
      channelName: "BB ki Vines",
      channelLogoUrl:
        "https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 20,
      title: "A Tribute To MSD",
      thumbnailUrl:
        "https://i.pinimg.com/originals/3e/b1/c2/3eb1c2ed04cc648248e013c7728d81ce.jpg",
      likes: 79000 / 1000,
      views: 90000 / 1000,
      channelName: "ICC",
      channelLogoUrl:
        "https://yt3.ggpht.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s68-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div>
      <Channel />
      <div className="cards">
        {videos.map((video) => {
          return (
            <VideoCard
              videoThumbnail={video.thumbnailUrl}
              likes={video.likes}
              views={video.views}
              title={video.title}
              channelName={video.channelName}
              channelLogoUrl={video.channelLogoUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

