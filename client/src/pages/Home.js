import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [fade, setFade] = useState({
    fade: 'bar1',
    fade2: 'bar1',
    fade3: 'bar1',
    fade4: 'bar1',
    fade5: 'bar1',
    fade6: 'bar1'
  })

  useEffect(() => {
    setFade({
      fade: 'bar2',
      fade2: 'bar3',
      fade3: 'bar4',
      fade4: 'bar5',
      fade5: 'bar6',
      fade6: 'bar7'
    })
  }, [])

  return (
    <div className="column">
      <div className="flex">
        <h1 className={fade.fade}>Welcome to </h1>
        <h1 className={`${fade.fade}  siteTitle`}>&nbsp; TurnTables &nbsp;</h1>
        <h1 className={fade.fade}>, Cool Cats</h1>
      </div>
      <div className="flex">
        <h1 className={fade.fade2}>A site for reviewing and saving your</h1>
        <h1 className={`${fade.fade2}  siteTitle`}>
          &nbsp; favorite albums &nbsp;
        </h1>
      </div>
      <div className="flex">
        <h1 className={`${fade.fade3}  siteTitle`}>Register</h1>
        <h1 className={fade.fade3}>&nbsp;&&nbsp;</h1>
        <h1 className={`${fade.fade3}  siteTitle`}>Sign In</h1>
        <h1 className={fade.fade3}>
          To review and see your info in user details
        </h1>
      </div>
      <div className="flex">
        <h1 className={`${fade.fade4}  siteTitle`}>Or</h1>
      </div>
      <div className="flex">
        <h1 className={fade.fade5}>Click &nbsp;</h1>
        <h1 className={`${fade.fade5}  siteTitle`}>Guest Login&nbsp;</h1>
        <h1 className={fade.fade5}>Then &nbsp;</h1>
        <h1 className={`${fade.fade5}  siteTitle`}>Sign in&nbsp;</h1>
        <h1 className={fade.fade5}>To log in as a guest</h1>
      </div>
      <div className="flex">
        <h1 className={fade.fade6}>Click on our pics to check us out below!</h1>
      </div>
      <div className={`${fade.fade6}  flexAround`}>
        <div className="socials">
          <iframe
            className="spotifyLink"
            src="https://open.spotify.com/embed/track/0jx8zY5JQsS4YEQcfkoc5C?utm_source=generator"
            width="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="angels"
          ></iframe>
          <Link to="https://www.linkedin.com/in/noahvaughn/">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEKdlOrR21oeA/profile-displayphoto-shrink_200_200/0/1673226247706?e=1683763200&v=beta&t=DAhGZ5NoPlEhPgFfU7NKknMrOgY3HZ3McnGZy6ITirY"
              className="profilePic"
            />
          </Link>
        </div>
        <div className="socials">
          <iframe
            className="spotifyLink"
            src="https://open.spotify.com/embed/track/6EfGrYJ8Kw4xuNRd7UzQA3?utm_source=generator"
            width="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="hellfindsyou"
          ></iframe>

          <Link to="https://www.linkedin.com/in/sarah-maher-8a6865255/">
            <img
              src="https://media.licdn.com/dms/image/D5603AQE0in3_VKwvlQ/profile-displayphoto-shrink_200_200/0/1675885902382?e=1683763200&v=beta&t=p_2d0-c5_CJUgqmohNPOe98QclhASV4jJuQ0y_-Gq_s"
              className="profilePic"
            />
          </Link>
        </div>
        <div className="socials">
          <iframe
            className="spotifyLink"
            src="https://open.spotify.com/embed/track/1SShxVVBeZBCY7WddnksPz?utm_source=generator"
            width="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="jonssong"
          ></iframe>
          <Link to="https://www.linkedin.com/in/jon-lindner-807847183/">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQGU_g4hzJWZ2w/profile-displayphoto-shrink_200_200/0/1676421652630?e=1683763200&v=beta&t=Q_wGyL4gxSI1eglBACTTLS_tIVPgOux27yMpj-OhDus"
              className="profilePic"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Home
