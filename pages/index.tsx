import Image from "next/image";
import localFont from "next/font/local";
import { Typewriter } from "@/utils/TypingEffect";
import { github_user, link_linkedln, nome, storiesData } from "@/utils/config";
import { StoriesList } from "@/components/storys";
import { useRouter } from "next/router";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface GitHubData {
  name: string;
  email: string;
  profilePicture: string;
  recentEvents: { title: string; link: string; published: string }[];
}

export default function Home() {
  const r = useRouter()

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]`}
    >
    <Head>
    <title>Portfolio de {nome ?? github_user} | Desenvolvedor Full Stack</title>
    <meta name="description" content={`Portfólio de ${nome ?? github_user}, desenvolvedor apaixonado por tecnologia e inovação. Veja meus projetos e entre em contato.`} />
    <meta name="keywords" content="desenvolvimento web, full stack, programação, tecnologia, portfólio" />
    <meta name="author" content={nome ?? github_user} />
    <meta property="og:title" content={`Portfolio de ${nome ?? github_user}`} />
    <meta property="og:description" content={`Portfólio de ${nome ?? github_user}, desenvolvedor apaixonado por tecnologia e inovação.`} />
    <meta property="og:image" content="/banner.png" />
    <meta property="og:url" content="http://portfolio.dirrocha.com" />
    <meta name="twitter:title" content={`Portfolio de ${nome ?? github_user}`} />
    <meta name="twitter:description" content="Veja meus projetos e entre em contato." />
    <meta name="twitter:image" content="/banner.png"  />
    <meta name="twitter:card" content="summary_large_image" />
    </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[100%] max-w-[800px]">
        <div className="rounded-full w-[150px] h-[150px] bg-white m-auto mb-0 bg-[url('https://github.com/marco0antonio0.png?size=100px')] bg-cover bg-center flex-shrink-0 select-none cursor-pointer border-4 border-green-400 lg:mt-[-40px]"></div>
        
        <ol className="list-inside list-none text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] m-auto max-w-[300px]">
          
          <li className="mb-2">
          <Typewriter
          text={`Ola me chamo ${nome??github_user} Seja bem vindo ao meu portfolio Veja meus projetos abaixo .................................`}
          />
          </li>
        </ol>
        <h1 className="m-auto mt-0 text-[12mm] font-semibold lg:text-[8mm]">Welcome to portfolio</h1>

        <div className="w-[100%] h-[130px] flex-col rounded-lg border-gradient flex items-center justify-center text-white select-none cursor-pointer  bg-[#18181B] p-5 shadow-md mt-8">
          <img src="/icons/foguete.png" className="w-20 h-20 m-auto mt-[-60px]" alt="" />
          <h1 className="font-semibold m-auto mt-0">Transforme ideias em realidade 🚀</h1>
          <span className="text-sm text-justify m-auto md:px-2 mt-0">Explore novas tecnologias, desenvolva soluções inovadoras e compartilhe conhecimento.</span>
        </div>

        <div className="flex flex-row w-[100%] h-[300px] gap-3 md:flex-col md:h-auto ">
        <div className="flex flex-col w-[100%] gap-3">
        
        <div className="w-[100%] h-[100%] rounded-lg flex flex-row items-center justify-center text-white select-none cursor-pointer  bg-[#18181B] p-5 border-2 border-gray-800"
        onClick={()=>{r.push('https://github.com/'+github_user)}}>
          <img src="/icons/github.png" className="w-20 h-20 mr-3" alt="" />
          <div className="flex flex-col">
            <h1 className="font-semibold">Projetos Github 🚀</h1>
            <span className="text-sm">Contribuindo para a comunidade open-source e desenvolvendo soluções inovadoras. Veja meus repositórios! </span>
          </div>
        </div>
        {/* ===================================================================================================== */}
        <div className="w-[100%] h-[100%] rounded-lg flex flex-row items-center justify-center text-white select-none cursor-pointer  bg-[#18181B] p-5 border-2 border-gray-800" 
        onClick={()=>{r.push(link_linkedln)}}>
          <img src="/icons/cert.png" className="w-20 h-20 mr-3" alt="" />
          <div className="flex flex-col" >
            <h1 className="font-semibold">Linkedln 💼</h1>
            <span className="text-sm">Conecte-se comigo para trocar ideias, experiências e oportunidades no mundo da tecnologia.</span>
          </div>
        </div>
        {/* ===================================================================================================== */}
        </div>
        {/* ===================================================================================================== */}
        <div className="w-[100%] h-[100%] rounded-lg flex flex-col items-center justify-center text-white select-none cursor-pointer  bg-[#18181B] border-2 border-gray-800"
        onClick={()=>{r.push("https://genreadme.dirrocha.com/")}}>
          <div className="flex flex-col">
            <h1 className="font-semibold md:mt-5 md:m-auto px-2">Gerador readme 📦</h1>
            <span className="text-sm px-2">Tecnologia que que utilizo no dia a dia para construir readme de maneira rapida e pratica.</span>
          </div>
          <img src="/icons/lego.png" className="w-20 h-20 mr-3 mt-5 md:mb-5" alt="" />
          </div>
        {/* ===================================================================================================== */}
        </div>
        
        <div className="flex flex-row">
        <StoriesList stories={storiesData} />
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/marco0antonio0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Criado por @marco0antonio0
        </a>
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Whatsapp
        </a> */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/marco0antonio0/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Acessar projeto portfolio →
        </a>
      </footer>
    </div>
  );
}



