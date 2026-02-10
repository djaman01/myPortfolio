const TechnoCards = ({ imgLogo, nomTechno, bgAnimatedColor }) => {
  return (
    <>
      <div className="flex w-max flex-col items-center">
        {/* Card Bg: relative est obligé pour pouvoir mettre l'animation du background au-dessus avec absolute*/}
        <div className="relative flex h-44 w-44 items-center justify-center rounded-2xl border-red-500 shadow-2xl max-sm:h-38 max-sm:w-38">
          {/* bg avant l'image => Animation bleu sur le logo: absolute et inset-0 => opacity permet la transparence et blur un style brouillard*/}
          <div
            className={`absolute inset-0 animate-pulse rounded-2xl ${bgAnimatedColor} opacity-20 blur-2xl `}
          ></div>

          <img
            src={imgLogo}
            alt="logo React"
            className="z-10 h-28 w-28 object-contain max-sm:h-24 max-sm:w-24" //Obligé de mettre un h- et w- pour que si je fais juste flex justify-center, l'image ne va pas s'élargir car par défaut dans flex on a items-stretch / z-10 simplement par protection pour dire que l'image est au-dessus du bg même si ça ne change visuellement rien,
          />
        </div>
        <p className="martian-mono mt-2 text-lg">{nomTechno}</p>
      </div>
    </>
  );
};

export default TechnoCards;
