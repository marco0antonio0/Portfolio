
interface Story {
    title: string;
    description: string;
    link: string;
    image: string;
    author: string;
    date: string;
  }
  
  interface StoriesProps {
    stories: Story[];
  }
  
  export const StoriesList: React.FC<StoriesProps> = ({ stories }) => {
    if(stories.length==0){
      return (
        <div className="max-w-6xl flex flex-col w-[100%] h-auto">
        <h2 className="text-3xl font-bold mb-6">Projetos</h2>
            <div className="flex flex-row w-[100%]">
              <div className="flex flex-row m-auto w-20 h-20">
                <div className="w-12 h-12 border-8 m-auto  border-gray-600 border-t-white rounded-full animate-spin"></div>
              </div>
            </div>
        </div>
      ) 
    }
    
    return (
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projetos</h2>
         
        <div className="flex flex-wrap gap-6 justify-center">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className=" text-white select-none cursor-pointer  bg-[#18181B] border-2 border-gray-800 shadow-md rounded-lg overflow-hidden w-full mdi:w-[48%] md:w-[100%]"
            >
              <a href={story.link} target="_blank" rel="noopener noreferrer">
                <img src={story.image.length>0?story.image:"/github-cover.jpg"} alt={story.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="text-gray-500 text-sm">{story.date}</p>
                <p className="text-gray-500 mt-2">{story.description}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${story.author}`}
                    alt={story.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="font-bold">{story.author}</span>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };