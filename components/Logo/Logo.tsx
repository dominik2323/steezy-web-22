import { motion } from "framer-motion";
import React, { useState } from "react";
import { ColorKeys, colors } from "../../helpers/consts";
import { StyledLogo } from "./Styles/StyledLogo";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const [hover, toggleHover] = useState(false);

  return (
    <StyledLogo>
      <a href={"/"}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 264 87'>
          <rect
            x='194'
            y='2'
            width='68'
            height='83'
            fill={hover ? colors.white : colors.primary300}
          />
          <rect
            x='2'
            y='2'
            width='190'
            height='83'
            fill={hover ? colors.primary400 : colors.primary300}
          />
          <polygon points='0 0 0 0 0 0 0 0' />
          <path
            d='M528.44808,504.96669h-194v87h264v-87Zm-2,85h-190v-83h190Zm70,0h-68v-83h68Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            d='M582.116,525.60048a17.43373,17.43373,0,0,0-7.82813-5.398,33.60767,33.60767,0,0,0-11.835-2.04981A31.35354,31.35354,0,0,0,547.445,521.679a14.787,14.787,0,0,0-4.66894,3.92627,7.94263,7.94263,0,0,0,.00293,10.021,17.44038,17.44038,0,0,0,7.82714,5.395,33.46032,33.46032,0,0,0,10.44983,2.03064,2.43976,2.43976,0,0,0-.28479.23157,2.49413,2.49413,0,0,0-.7334,1.771v32.91308a.725.725,0,0,0,.72364.71973h.05175L576.05441,572.16a.72492.72492,0,0,0,.66406-.7207v-6.15332a.72656.72656,0,0,0-.7207-.7207h-.38086v-11.871a2.48471,2.48471,0,0,0-.749-1.7627,2.62319,2.62319,0,0,0-1.77636-.7168,2.51677,2.51677,0,0,0-1.2793.36524,2.46835,2.46835,0,0,0-.46875-.63086,2.51645,2.51645,0,0,0-3.51758.001c-.05957.05957-.11621.12207-.1709.18847a2.52868,2.52868,0,0,0-2.63867-.35937v-4.77051a2.39648,2.39648,0,0,0-.73535-1.71436,2.45454,2.45454,0,0,0-.29065-.23852,31.1644,31.1644,0,0,0,13.46155-3.50708,14.81361,14.81361,0,0,0,4.66894-3.92725,7.94272,7.94272,0,0,0-.00488-10.021Zm-18.92969-.60694.002-5.334.20605.01953a10.039,10.039,0,0,1,6.32031,3.15283,10.88684,10.88684,0,0,1,1.23243,1.583l.17285.26855-.31934.02344c-2.32324.17041-4.82129.2666-7.42285.28662Zm8.51367,1.11914.14063-.01513.05078.125a11.46409,11.46409,0,0,1,.80566,3.33789l.01856.207h-9.5293v-3.29981h.1875C566.31713,526.44471,569.11889,526.32508,571.69994,526.11268Zm2.49317,3.66162-.01367-.17578a13.0991,13.0991,0,0,0-.72461-3.41211l-.082-.22656.24023-.0249c1.30274-.13623,2.51367-.29639,3.60059-.477.78808-.1294,1.54785-.27832,2.25586-.44238l.10058-.02247.0752.06934a10.73525,10.73525,0,0,1,1.29883,1.43311,7.29442,7.29442,0,0,1,1.38476,3.05615l.04.22265Zm3.41211-5.88379c-1.39844.25391-2.998.46973-4.752.64014l-.126.01221-.05957-.11182a12.446,12.446,0,0,0-1.88086-2.61279,12.05148,12.05148,0,0,0-1.15723-1.07715l-.88477-.58789,1.04688.25586a25.35591,25.35591,0,0,1,6.93848,2.5581c.29589.16651.60644.35694.94629.57911l.39843.25781Zm-4.89551,7.5669a11.3957,11.3957,0,0,1-.82031,3.53564l-.05274.13086-.13867-.01123c-2.61621-.21338-5.417-.33105-8.32812-.35107h-.18555l.002-3.5083h9.53809Zm-9.33594,4.78223c2.57227.01806,5.06934.11523,7.42383.28857l.32031.02246-.17383.27a10.82844,10.82844,0,0,1-1.23339,1.58154,10.0353,10.0353,0,0,1-6.31739,3.15186l-.207.02051-.00195-5.335Zm6.252,4.25341a11.69949,11.69949,0,0,0,1.16308-1.08056,12.46291,12.46291,0,0,0,1.87793-2.61231l.06055-.11767.12109.0122c1.49121.145,2.877.32178,4.11719.52393l1.10156.19726-.40136.26124a20.62679,20.62679,0,0,1-3.90528,1.96337,27.87849,27.87849,0,0,1-3.98047,1.17823l-.97949.23925Zm3.74609-5.22363.082-.22852a12.975,12.975,0,0,0,.73828-3.605l.01074-.17529h8.18457l-.03125.21094a7.206,7.206,0,0,1-1.4121,3.26709,10.77065,10.77065,0,0,1-1.29981,1.43017l-.07324.06885-.23047-.05322c-.15527-.03613-.30957-.07178-.47363-.10645-1.47559-.30859-3.24317-.57226-5.25489-.7832Zm-21.85059-9.30908-.082.229a12.99289,12.99289,0,0,0-.72461,3.41016l-.01269.1748h-8.17578l.03906-.21923a7.27925,7.27925,0,0,1,1.3877-3.062,10.45508,10.45508,0,0,1,1.2998-1.4331l.08887-.06446.166.03858c.168.04.33789.08008.51953.11816,1.47364.30811,3.24121.57178,5.25293.78272Zm2.25684-1.28076.17285-.26953a10.8789,10.8789,0,0,1,1.23145-1.58106,10.05217,10.05217,0,0,1,6.32129-3.15185l.207-.01954v5.334h-.19141c-2.56445-.01807-5.06152-.11475-7.42285-.28858Zm7.93164,5.09472h-9.5293l.01856-.20752a11.45321,11.45321,0,0,1,.80371-3.334l.05176-.12549.1416.01123c2.59473.21289,5.39551.33106,8.32812.35108h.18555Zm-6.35156-9.11279-.08887.07324a12.31747,12.31747,0,0,0-1.16308,1.0791,12.54079,12.54079,0,0,0-1.87891,2.61231l-.05859.10937-.125-.0122c-1.49024-.145-2.876-.32129-4.1211-.52491-.19629-.03125-.38281-.064-.56738-.09912l-.52735-.09619.39942-.25781a20.73513,20.73513,0,0,1,3.90137-1.96289,28.30857,28.30857,0,0,1,3.97949-1.17774l1.08105-.23535Zm-2.16211,14.458-.1377.01074-.05273-.12988a11.495,11.495,0,0,1-.82227-3.53809l-.01367-.19775h9.541v3.5h-.18946c-2.95315.02344-5.75393.14258-8.32522.355Zm-2.50586-3.86084.01074.17676a13.12525,13.12525,0,0,0,.73926,3.60644l.082.22754-.24121.02441c-1.31641.13868-2.52734.29932-3.59961.477-.7998.13233-1.55957.28125-2.25879.44288l-.09766.02294-.07617-.06933a10.7779,10.7779,0,0,1-1.29785-1.43262,7.2012,7.2012,0,0,1-1.41211-3.26123l-.03027-.21484Zm-3.40234,6.082c1.39062-.25293,2.99023-.46826,4.75488-.64014l.124-.01513.0586.10791a12.46323,12.46323,0,0,0,1.8789,2.61328,12.27745,12.27745,0,0,0,1.17188,1.085l.709.51562-.88574-.19043a25.25777,25.25777,0,0,1-6.93359-2.54736c-.29883-.17041-.59961-.354-.94629-.57861l-.4043-.26367Zm14.42187-1.105v5.33887l-.20605-.02051a10.04071,10.04071,0,0,1-6.32129-3.15235,11.10037,11.10037,0,0,1-1.23242-1.58105l-.17286-.27.31836-.02246c2.31055-.17139,4.80762-.26856,7.42285-.28858Zm-.22851,31.41943v-1.64453h13.793v1.64453Zm2.08886-13.75586a4.10827,4.10827,0,0,0-2.08886.82031v-9.665a1.04274,1.04274,0,0,1,1.04394-1.03907h.00488a1.04061,1.04061,0,0,1,.73828.31055.95488.95488,0,0,1,.30176.69434Zm6.77539,3.3291a1.021,1.021,0,0,1-.64062.29786,2.542,2.542,0,0,0,.22656-1.07422,2.3964,2.3964,0,0,0-.76074-1.80371,2.62765,2.62765,0,0,0-.6211-.4795v-2.44043a1.04494,1.04494,0,0,1,2.08887-.00683l.001,4.791a.99784.99784,0,0,1-.294.71591Zm-2.20508.04786.001.002c-.02148.01855-.08008.06348-.09179.07324a.98032.98032,0,0,1-.70313.26074h-3.05469a.72355.72355,0,0,0-.14941,1.43067c1.60644.335,2.66211,1.58105,3.22851,3.80957a.72069.72069,0,0,0,.69825.542,1.24407,1.24407,0,0,0,.18261-.02051.72861.72861,0,0,0,.52344-.86718,7.1365,7.1365,0,0,0-1.77539-3.4502h.34473a2.56852,2.56852,0,0,0,1.21386-.30664,2.42377,2.42377,0,0,0,1.01172.22363h.04492a2.47378,2.47378,0,0,0,1.748-.72754l.00781.00879a2.40659,2.40659,0,0,0,1.71192.72266h.0459a2.38468,2.38468,0,0,0,1.03906-.21875v5.81158H561.48119v-6.93457a2.26488,2.26488,0,0,1,.667-1.59472,2.8852,2.8852,0,0,1,2.14453-.73438h3.05469a1.87175,1.87175,0,0,1,.27929.02051,1.167,1.167,0,0,1,.52832.3457,1.00387,1.00387,0,0,1,.3291.78906,1.09791,1.09791,0,0,1-.34375.8144Zm5.72852-.03907a1.03694,1.03694,0,0,1-.66211.30176l-.0459-.00976-.03418.001a1.0221,1.0221,0,0,1-.72851-.293,1.04475,1.04475,0,0,1-.31739-.72754V552.658a1.02526,1.02526,0,0,1,1.02344-.999,1.04471,1.04471,0,0,1,1.0614,1.02783l.00013.00928.0039,3.82324a1.01194,1.01194,0,0,1-.30084.7178Zm-7.81445-6.23437a.953.953,0,0,1,.7373.30566.96913.96913,0,0,1,.30957.66992v1.88575h-2.085v-1.86817a.97383.97383,0,0,1,.29981-.69726.929.929,0,0,1,.72851-.2959l.00488-.18164Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14520'
            data-name='Path 14520'
            d='M500.12853,556.8155c-3.62,0-4.162-1.765-4.162-2.816v-.22c0-1.053.542-2.818,4.162-2.818h.5c3.569,0,4.1,1.775,4.1,2.833v.2c0,1.361-1.086,2.816-4.131,2.816Zm.234-5.224c-3.1,0-3.517,1.159-3.517,2.291,0,1.073.4,2.3,3.517,2.3s3.485-1.348,3.485-2.359c0-1.039-.393-2.232-3.458-2.232Zm1.019,3.737c.015-.005-.014-.041-.014-.147v-.307c0-.382-.171-.553-.553-.553h-1.327v1.007h-1.17v-2.907h2.9c.853,0,1.286.225,1.286.672a.652.652,0,0,1-.6.614v.2c.4.073.646.3.646.6v.569a.67846.67846,0,0,0,.036.25Zm-1.894-1.608h1.386c.459,0,.494-.289.494-.377,0-.166-.086-.364-.494-.364h-1.386Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14521'
            data-name='Path 14521'
            d='M369.92156,544.56453c-7.421,0-11.212-2.017-11.271-6h7.13c.249,1.62,1.887,2.44,4.879,2.44,4.153,0,5-.8,5-2s-.672-1.863-4.229-1.931l-3.209-.066c-6.243-.161-9.41-1.951-9.41-5.322v-.2c0-2.478,1.259-5.321,11.071-5.321h1.337c7.238,0,10.929,1.78,10.97,5.3h-7.04c-.289-1.254-1.784-1.838-4.7-1.838-3.446,0-4.607.411-4.607,1.63,0,1.247,1.1,1.735,4.063,1.8l3.209.066c8.189.166,9.743,2.009,9.743,5.355v.2c0,2.742-1.317,5.889-11.572,5.889Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14522'
            data-name='Path 14522'
            d='M412.00857,544.56352c-10.768,0-12.376-5.575-12.376-8.9v-.733c0-4,2.112-8.765,12.175-8.765h2.039c8.1,0,12.207,3.163,12.207,9.4v.943h-19.755l.073.352c.513,2.484,2.745,3.743,6.639,3.743,4.642,0,5.808-1.562,6.1-2.3h6.835c-.274,5.651-8.494,6.263-12.033,6.263Zm.768-14.807c-3.613,0-5.6,1.032-6.265,3.251l-.113.377h12.8l-.09-.364c-.531-2.166-2.652-3.265-6.3-3.265Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14523'
            data-name='Path 14523'
            d='M440.79351,544.56352c-10.767,0-12.375-5.575-12.375-8.9v-.733c0-4,2.112-8.765,12.173-8.765h2.039c8.1,0,12.209,3.163,12.209,9.4v.943h-19.755l.073.352c.513,2.484,2.745,3.743,6.637,3.743,4.64,0,5.808-1.562,6.1-2.3h6.837c-.274,5.651-8.5,6.263-12.033,6.263Zm.768-14.806c-3.611,0-5.6,1.032-6.265,3.251l-.113.377h12.8l-.09-.364c-.533-2.166-2.652-3.265-6.3-3.265Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14524'
            data-name='Path 14524'
            d='M456.57153,544.06251v-3.9l12.818-9.235h-12.818v-4.26h21.941v3.728l-13.417,9.272h13.483v4.393Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14525'
            data-name='Path 14525'
            d='M483.74957,550.34651v-4.76h3.918c.772,0,1.163-.291,1.163-.861a3.92921,3.92921,0,0,0-.619-1.562l-8.614-16.5h7.35l5.972,12.566,5.8-12.566h6.827l-9.217,18.763c-1.758,3.584-3.479,4.916-6.355,4.916Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14526'
            data-name='Path 14526'
            d='M369.92156,573.60551c-7.421,0-11.212-2.017-11.271-6h7.13c.249,1.62,1.887,2.44,4.879,2.44,4.153,0,5-.8,5-2s-.672-1.863-4.229-1.931l-3.209-.066c-6.243-.161-9.41-1.951-9.41-5.322v-.2c0-2.478,1.259-5.321,11.071-5.321h1.337c7.238,0,10.929,1.78,10.97,5.3h-7.04c-.289-1.254-1.784-1.838-4.7-1.838-3.446,0-4.607.411-4.607,1.63,0,1.247,1.1,1.735,4.063,1.8l3.209.066c8.189.166,9.743,2.009,9.743,5.355v.2c0,2.742-1.317,5.889-11.572,5.889Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14527'
            data-name='Path 14527'
            d='M391.77157,573.1045c-2.794,0-4.151-1.577-4.151-4.82v-8.212h-3.51v-4.364h3.51v-3.436h6.766v3.432h3.54v4.368h-3.54v6.812c0,.922.213,1.865,1.8,1.865h1.74v4.36Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14528'
            data-name='Path 14528'
            d='M409.35557,573.5055c-6.1,0-8.264-3.713-8.264-6.893v-10.9h6.934v8.6c0,3.034,1.789,4.774,4.906,4.774,3.375,0,5.642-2.08,5.642-5.175v-8.2h6.866v17.4h-6.8v-3.495l-.626.58a11.53,11.53,0,0,1-8.392,3.309Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <rect
            id='Rectangle_609'
            data-name='Rectangle 609'
            x='125.45448'
            y='50.77883'
            width='6.866'
            height='17.396'
          />
          <path
            id='Path_14529'
            data-name='Path 14529'
            d='M439.59252,573.54054c-7.135,0-11.4-3.351-11.4-8.964v-.636c0-5.507,4.041-8.665,11.087-8.665h.552c2.679,0,6.434.481,9.118,2.769l.492.421v-7.978h6.9v22.615h-6.9v-3.226l-.465.6c-.819,1.058-3.743,3.058-8.939,3.058Zm2.347-14.138c-5.636,0-6.477,3.073-6.477,4.906v.132c0,2.459,2.024,4.938,6.546,4.938h.173c4.708,0,7.22-2.451,7.264-4.871v-.267c-.044-2.407-2.577-4.842-7.333-4.842Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <path
            id='Path_14530'
            data-name='Path 14530'
            d='M391.77157,544.06352c-2.794,0-4.151-1.577-4.151-4.82v-8.216h-3.51v-4.36h3.51v-3.432h6.766v3.432h3.54v4.359h-3.54v6.812c0,.922.213,1.865,1.8,1.865h1.74v4.36Z'
            transform='translate(-334.44808 -504.96669)'
          />
          <rect
            id='Rectangle_610'
            data-name='Rectangle 610'
            x='125.45448'
            y='45.55783'
            width='6.866'
            height='3.263'
          />
          <path
            id='Path_14531'
            data-name='Path 14531'
            d='M482.24853,573.60353c-8.46,0-12.574-2.943-12.574-9v-.6c0-5.839,4.231-8.8,12.574-8.8h3.671c8.345,0,12.574,2.96,12.574,8.8v.6c0,6.054-4.112,9-12.574,9Zm1.137-14.2c-5.869,0-6.746,3.033-6.746,4.84v.166c0,1.159.489,4.94,6.778,4.94h1.332c6.289,0,6.778-3.781,6.778-4.94v-.166c0-1.807-.877-4.84-6.744-4.84Z'
            transform='translate(-334.44808 -504.96669)'
          />
        </svg>
      </a>
    </StyledLogo>
  );
};

export default Logo;
