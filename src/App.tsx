import Navbar from "./components/Navbar";
import { Feedback } from "./components/Feedback";
import BirdIcon from "./assets/bird.svg";
import background from "./assets/bg-main.svg";
import { Heading } from "./components/Heading";

function App() {
  return (
    <>
      <div className="font-montserrat lg:bg-main pt-24 pb-4 min-h-screen bg-no-repeat bg-right-bottom lg:bg-[size:70%] xl:bg-[size:60%]">
        <Navbar />

        <div className="max-w-screen-xl mx-auto relative bg-secondary-sm">
          <img
            src={background}
            alt=""
            className="absolute hidden md:inline lg:hidden bottom-0 right-0 w-7/12 md:w-8/12 pointer-events-none"
          />
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-3 lg:mb-7">
              <div className="col-span-2 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center mb-3">
                  <img
                    className="w-12 md:order-1 md:ml-2"
                    src={BirdIcon}
                    alt="bird icon"
                  />
                  <Heading>Побачення Для вас</Heading>
                </div>
                <p className="mb-3 text-secondary font-semibold text-xl lg:text-2xl">
                  Ми - ваш провідник у світі мистецтва знайомств та романтики!
                  Наша мета - допомогти вам знайти вашу супутницю чи супутника
                  життя, з ким ви зможете поділитися радістю, сміхом та
                  миттєвостями, або збудувати міцний, довгостроковий зв'язок, що
                  зігріє ваші серця протягом усього життя. У цьому вам
                  допоможуть професійні свахи.
                </p>
              </div>
            </div>

            <Feedback />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
