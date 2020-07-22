import React, { Component } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import './musicPlayer.css';

class MusicPlayer extends Component {
  render() {
    // const playlist = musicAll.map((music) => ({
    //   name: music.title,
    //   singer: music.artis.name,
    //   cover: `http://localhost:5000/uploads/${music.thumbnail}`,
    //   musicSrc: music.attache
    // }));
    const audioList1 = [
      {
        name: '高尚',
        singer: '薛之谦',
        cover: '//cdn.lijinke.cn/nande.jpg',
        musicSrc: '//cdn.lijinke.cn/gaoshang.mp3',
      },
      {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        cover:
          'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        musicSrc: () => {
          return Promise.resolve(
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
          );
        },
      },
    ];
    return (
      <div
        style={{
          height: '100px',
          width: '100%',
        }}
      >
        <ReactJkMusicPlayer
          mode="full"
          audioLists={[
            {
              name: '高尚',
              singer: '薛之谦',
              cover: '//cdn.lijinke.cn/nande.jpg',
              musicSrc: '//cdn.lijinke.cn/gaoshang.mp3',
            },
            {
              name: 'Despacito',
              singer: 'Luis Fonsi',
              cover:
                'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
              musicSrc: () => {
                return Promise.resolve(
                  'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
                );
              },
            },
          ]}
          defaultPlayIndex={0}
          autoPlay={false}
          showDownload={false}
          showThemeSwitch={false}
          toggleMode={false}
          responsive={false}
          glassBg={true}
          playIndex={audioList1}
          onAudioPlay={{
            name: 'song.title',
            singer: 'song.Artist.name',
            cover: '`http://localhost:5000/uploads/${song.thumbnail}`',
            musicSrc:
              'https://download.mp3-here.icu/d/Charlie-Puth-We-Dont-Talk-Anymore-feat-Selena-Gomez.mp3',
          }}
        />
        ,
      </div>
    );
  }
}

export default MusicPlayer;
