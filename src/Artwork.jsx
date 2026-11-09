import { useState } from 'react'

const orbitWidth = 450
const orbitHeight = 310
const orbits = [
  { angle: -38, rx: 157.5, ry: 98, phase: 0 },
  { angle: 38, rx: 157.5, ry: 98, phase: 35 / 120 },
  { angle: 86, rx: 112, ry: 103, phase: 49 / 120 },
]

export function Orbit({ avatar, projects }) {
  const [paused, setPaused] = useState(false)

  return (
    <figure className="orbit">
      <div className="orbit-stage" data-paused={paused} aria-hidden="true">
        <svg viewBox={`0 0 ${orbitWidth} ${orbitHeight}`} fill="none">
          <defs>
            <pattern id="paper-grid" width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M22 0H0V22" stroke="currentColor" strokeOpacity=".13" />
            </pattern>
          </defs>
          <rect x="1" y="1" width="448" height="308" fill="url(#paper-grid)" />
          <path d="M1 18V1h17m414 0h17v17M1 292v17h17m414 0h17v-17" stroke="currentColor" />
          <g transform="translate(225 155)" stroke="currentColor">
            <circle r="134" strokeOpacity=".3" strokeDasharray="2 5" />
            {orbits.map(({ angle, rx, ry }) => (
              <ellipse key={angle} rx={rx} ry={ry} transform={`rotate(${angle})`} strokeOpacity=".55" />
            ))}
          </g>
        </svg>
        <img className="avatar orbit-core" src={avatar} alt="" />
        {orbits.map(({ angle, rx, ry, phase }, trackIndex) => {
          const satellites = projects.filter((_, index) => index % orbits.length === trackIndex)

          return (
            <div
              className="orbit-track"
              key={angle}
              style={{
                '--angle': `${angle}deg`,
                '--radius-x': `${rx / orbitWidth * 100}%`,
                '--radius-y': `${ry / orbitHeight * 100}%`,
              }}
            >
              {satellites.map(({ id, title, logo }, index) => (
                <div
                  className="orbit-satellite"
                  key={id}
                  style={{ '--phase': phase + index / satellites.length }}
                >
                  <span className="orbit-logo" data-project={id} title={title}>
                    {logo ? <img src={logo} alt="" /> : title.slice(0, 1)}
                  </span>
                </div>
              ))}
            </div>
          )
        })}
      </div>
      <button
        className="orbit-control"
        type="button"
        aria-label={paused ? 'Resume orbit' : 'Pause orbit'}
        onClick={() => setPaused(!paused)}
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {paused ? <path d="m5 3 8 5-8 5Z" /> : <path d="M6 3v10m4-10v10" />}
        </svg>
      </button>
    </figure>
  )
}

export function Artwork({ id }) {
  const illustrations = {
    tiris: (
      <>
        <path d="M71 171 121 148 172 156 224 106 274 116 325 69 376 81 429 48 482 59 529 28V201H71Z" fill="currentColor" fillOpacity=".13" stroke="none" />
        <path d="M71 171 121 148 172 156 224 106 274 116 325 69 376 81 429 48 482 59 529 28" strokeWidth="2.4" />
        <path d="M71 200h458M71 41v159" opacity=".46" />
        {[121, 172, 224, 274, 325, 376, 429, 482].map((x, i) => (
          <path key={x} d={`M${x} ${[92, 105, 80, 68, 40, 61, 30, 39][i]}v72`} strokeWidth="6" opacity=".26" />
        ))}
        <circle cx="429" cy="48" r="5" fill="currentColor" stroke="none" />
      </>
    ),
    upglow: (
      <>
        <rect x="168" y="46" width="264" height="148" rx="9" fill="var(--cover-bg)" />
        <path d="M168 76h264m-236 25h130m-130 17h97m-97 18h115m-115 32h59" opacity=".6" />
        <circle cx="185" cy="61" r="2" fill="currentColor" />
        <circle cx="195" cy="61" r="2" fill="currentColor" />
        <circle cx="205" cy="61" r="2" fill="currentColor" />
        <path d="M315 173h87m-76-6v-15m16 15v-23m16 23v-14m16 14v-35m16 35v-43" strokeWidth="5" />
        <path d="M433 24q0 33 33 33-33 0-33 33 0-33-33-33 33 0 33-33Z" fill="var(--cover-bg)" strokeWidth="1.6" />
        <path d="M145 121q0 17 17 17-17 0-17 17 0-17-17-17 17 0 17-17Z" />
      </>
    ),
    'easygrin-pool': (
      <>
        <path d="M300 33 405 91v64l-105 57-105-57V91Zm-105 58 105 59 105-59m-105 59v62" strokeWidth="1.6" />
        <path d="m195 123 105 59 105-59M247 62l105 59v62M353 62l-105 59v62M300 33v65m-105 57 105-57 105 57" opacity=".55" />
        <circle cx="300" cy="150" r="5" fill="currentColor" />
        <circle cx="195" cy="91" r="4" fill="currentColor" />
        <circle cx="405" cy="91" r="4" fill="currentColor" />
        <circle cx="300" cy="33" r="4" fill="currentColor" />
        <circle cx="300" cy="212" r="4" fill="currentColor" />
      </>
    ),
    'easygrin-wallet': (
      <>
        <rect x="182" y="65" width="213" height="127" rx="14" fill="var(--cover-bg)" strokeWidth="1.6" />
        <path d="m186 68 161-37 9 34m-168 21h188m-170 77h70" opacity=".64" />
        <path d="M393 109h-44a18 18 0 0 0 0 36h44" fill="var(--cover-bg)" strokeWidth="1.6" />
        <circle cx="349" cy="127" r="4" fill="currentColor" />
        <path d="M429 99v55m-16-16 16 16 16-16M410 174h38" strokeWidth="1.6" />
      </>
    ),
    zytxl: (
      <>
        <path d="M171 122h258M300 46v155" opacity=".5" />
        <circle cx="300" cy="122" r="74" strokeDasharray="3 5" />
        <circle cx="300" cy="122" r="42" fill="var(--cover-bg)" strokeWidth="1.6" />
        <circle cx="300" cy="109" r="10" />
        <path d="M280 144a20 20 0 0 1 40 0" />
        <circle cx="300" cy="47" r="9" fill="var(--cover-bg)" />
        <circle cx="300" cy="197" r="9" fill="var(--cover-bg)" />
        <circle cx="194" cy="122" r="13" fill="var(--cover-bg)" />
        <circle cx="406" cy="122" r="13" fill="var(--cover-bg)" />
      </>
    ),
    reindeer: (
      <>
        <circle cx="300" cy="121" r="86" strokeDasharray="3 5" opacity=".65" />
        <circle cx="300" cy="121" r="64" />
        <path d="M236 121h128M300 57v128" opacity=".5" />
        <path d="m330 83-17 48-43 26 17-47Z" strokeWidth="1.6" fill="var(--cover-bg)" />
        <path d="m330 83-30 38-13-11Z" fill="currentColor" />
        <circle cx="300" cy="121" r="4" fill="var(--cover-bg)" />
        <path d="M185 121h22m186 0h22" />
      </>
    ),
    wangcard: (
      <>
        <rect x="247" y="55" width="111" height="130" rx="7" transform="rotate(-17 302 120)" fill="var(--cover-bg)" opacity=".72" />
        <rect x="247" y="55" width="111" height="130" rx="7" transform="rotate(17 302 120)" fill="var(--cover-bg)" />
        <rect x="247" y="55" width="111" height="130" rx="7" fill="var(--cover-bg)" strokeWidth="1.6" />
        <path d="M265 85h75v73h-75Zm0 36h75m-37-36v73" strokeDasharray="2 3" opacity=".5" />
        <path d="M283 109h39m-19-15v55m-1-38q-9 16-24 26m26-25q9 16 23 24" strokeWidth="3" strokeLinecap="round" />
      </>
    ),
    tetragram: (
      <>
        <path d="m300 32 115 145H185Zm0 0v115m-115 30 115-30 115 30" strokeWidth="1.6" />
        <path d="m300 147 56-44m-56 44-56-44" strokeDasharray="3 4" />
        <rect x="263" y="83" width="74" height="56" rx="3" transform="rotate(-9 300 111)" fill="var(--cover-bg)" />
        <path d="m270 127 15-16 10 7 10-18 26 22" />
        <circle cx="282" cy="99" r="4" />
        <circle cx="300" cy="32" r="4" fill="currentColor" />
        <circle cx="185" cy="177" r="4" fill="currentColor" />
        <circle cx="415" cy="177" r="4" fill="currentColor" />
      </>
    ),
  }

  return (
    <svg className="cover-art" viewBox="0 0 600 240" fill="none" stroke="currentColor">
      {illustrations[id]}
    </svg>
  )
}
