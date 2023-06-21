import styled from "styled-components";
import Search from "./components/Search";
import DarkModeSwitch from "./components/DarkModeSwitch";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu({filterValue, setFilterValue }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search filterValue={filterValue} setFilterValue={setFilterValue} />
      <DarkModeSwitch />
    </StyledMenu>
  );
}

function Logo() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="36.000000pt" height="36.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2513 5107 c-93 -52 -383 -518 -383 -615 0 -54 51 -86 104 -66 9 4
45 65 81 138 64 131 156 280 214 346 l31 35 30 -35 c94 -108 231 -355 289
-523 83 -236 113 -420 114 -677 0 -284 -18 -401 -172 -1135 l-37 -180 -77 -3
-77 -3 0 570 0 570 43 19 c49 22 119 94 143 149 11 25 17 65 18 118 0 67 -4
88 -26 130 -50 96 -154 165 -248 165 -94 0 -198 -69 -248 -165 -36 -68 -37
-187 -3 -256 29 -60 84 -117 139 -141 l42 -19 0 -570 0 -570 -77 3 -76 3 -43
205 c-138 655 -147 710 -165 958 -12 169 0 378 30 532 22 107 16 135 -32 158
-38 19 -78 -2 -93 -48 -37 -114 -49 -234 -48 -505 0 -349 2 -363 167 -1142
l35 -163 -39 0 c-43 0 -36 -19 -64 172 -39 262 -131 499 -261 669 -57 74 -178
186 -247 227 -172 104 -335 145 -567 145 -276 1 -482 -58 -665 -188 -277 -197
-416 -573 -299 -812 63 -129 219 -223 372 -223 102 0 232 62 280 134 51 75 65
132 69 281 3 139 4 140 32 166 52 48 225 65 346 34 205 -54 371 -242 465 -528
12 -38 18 -72 14 -76 -5 -4 -29 -13 -53 -20 -64 -18 -144 -102 -165 -171 -20
-67 -20 -103 0 -170 20 -67 101 -152 162 -171 23 -7 42 -15 42 -19 0 -18 -66
-92 -107 -119 -119 -79 -240 -102 -677 -130 -128 -8 -129 -8 -158 -40 -59 -66
-29 -132 89 -193 156 -81 301 -113 513 -113 130 1 168 4 235 23 253 72 439
245 541 505 l27 67 74 0 73 0 0 -29 c0 -57 -32 -194 -75 -324 -24 -73 -47
-149 -50 -169 -7 -35 -10 -38 -39 -38 -143 0 -276 -132 -276 -275 0 -147 132
-275 285 -275 l42 0 27 -84 c56 -170 173 -385 297 -547 75 -96 113 -115 174
-87 24 11 104 108 174 211 48 71 43 125 -16 148 -38 14 -68 -6 -117 -78 -25
-37 -55 -79 -66 -93 l-20 -25 -20 25 c-85 104 -204 319 -254 458 l-26 72 300
0 299 0 -25 -72 c-28 -84 -22 -118 25 -138 61 -25 94 13 135 153 l17 57 42 0
c24 0 67 7 97 16 103 30 190 149 190 259 0 143 -133 275 -275 275 -30 0 -32 2
-45 57 -7 31 -27 99 -46 150 -35 95 -74 267 -74 322 l0 31 74 0 73 0 22 -57
c94 -255 293 -444 541 -513 218 -61 540 -23 753 87 118 62 148 128 89 194 -29
32 -30 32 -158 40 -437 28 -558 51 -677 130 -41 27 -107 101 -107 119 0 4 19
12 42 19 61 19 142 104 162 171 20 67 20 103 0 170 -21 69 -101 153 -165 171
-24 7 -48 16 -53 20 -10 9 25 118 69 215 97 212 257 358 432 394 73 16 236 8
285 -13 61 -26 67 -44 70 -207 3 -135 5 -149 30 -201 38 -76 89 -126 167 -163
59 -27 76 -30 156 -30 103 0 162 18 243 71 61 41 123 123 149 196 23 67 23
208 0 297 -54 202 -202 398 -383 506 -102 61 -139 72 -172 53 -15 -8 -31 -27
-36 -41 -16 -46 5 -72 96 -119 63 -32 104 -64 169 -128 73 -73 93 -100 132
-181 25 -52 50 -119 56 -148 42 -205 -52 -347 -239 -359 -57 -4 -72 -1 -119
24 -85 45 -101 83 -101 246 0 152 -10 193 -61 251 -45 51 -111 82 -206 96
-393 57 -707 -171 -858 -622 -19 -58 -35 -113 -35 -122 0 -14 -14 -16 -91 -16
l-90 0 6 48 c52 384 140 597 325 783 82 82 108 102 190 142 150 74 223 90 433
92 155 2 180 4 197 20 26 23 26 79 1 104 -42 42 -328 37 -506 -9 -297 -76
-537 -298 -664 -616 -63 -156 -85 -249 -127 -532 -5 -30 -8 -32 -43 -32 l-39
0 40 188 c101 478 118 566 138 697 31 199 38 545 16 714 -52 389 -200 742
-434 1032 -77 96 -122 118 -179 86z m124 -1178 c55 -52 68 -121 34 -187 -65
-125 -241 -72 -241 73 0 46 20 85 62 120 27 23 39 26 76 22 27 -3 53 -14 69
-28z m-1372 -498 c371 -96 608 -418 680 -922 8 -57 15 -107 15 -111 0 -5 -40
-8 -88 -8 l-88 0 -17 68 c-10 37 -32 103 -50 148 -163 401 -462 597 -830 544
-95 -14 -161 -45 -206 -96 -51 -58 -61 -99 -61 -250 0 -107 -3 -134 -20 -169
-62 -128 -265 -143 -376 -28 -97 100 -98 260 -2 447 58 113 182 236 293 293
90 46 182 77 270 92 33 6 71 13 85 15 65 12 318 -3 395 -23z m2277 -1229 c29
-29 33 -39 33 -87 0 -48 -4 -58 -33 -87 l-32 -33 -938 -3 -939 -2 -34 23 c-45
30 -61 63 -56 115 5 45 34 87 72 103 11 4 442 7 957 6 l938 -2 32 -33z m-1632
-372 c0 -19 -52 -114 -95 -175 -82 -114 -178 -186 -312 -231 -138 -47 -399
-43 -548 9 l-40 14 95 7 c257 19 438 59 548 123 70 40 153 130 186 201 l30 62
68 0 c40 0 68 -4 68 -10z m580 -190 c0 -187 1 -201 20 -220 11 -11 33 -20 50
-20 17 0 39 9 50 20 19 19 20 33 20 220 l0 200 60 0 c56 0 60 -2 60 -23 0 -61
37 -227 81 -364 27 -84 49 -157 49 -163 0 -6 -113 -10 -320 -10 -207 0 -320 4
-320 10 0 6 22 79 49 163 44 137 81 303 81 364 0 21 4 23 60 23 l60 0 0 -200z
m886 138 c33 -71 116 -161 186 -201 110 -64 291 -104 548 -123 l95 -7 -40 -14
c-149 -52 -409 -56 -550 -9 -134 45 -240 127 -322 246 -34 51 -83 144 -83 160
0 6 28 10 68 10 l68 0 30 -62z m-224 -686 c29 -29 33 -39 33 -87 0 -48 -4 -58
-33 -87 l-32 -33 -560 0 -560 0 -32 33 c-29 29 -33 39 -33 86 0 44 5 59 25 81
14 15 34 31 45 36 11 4 266 7 567 6 l548 -2 32 -33z"/>
</g>
</svg>

  )
}