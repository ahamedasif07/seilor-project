import React from "react";
import Carousel from "../Carousels/Carousel";
import heroimgOne from "../../../public/images/project-sailor-home-page035.jpg";
import heroimgTow from "../../../public/images/project-sailor-home-page036.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <Carousel />
      <div className="flex items-center md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <Image
            src={heroimgOne}
            alt="hero image"
            objectFit="cover"
            // set approx height or use your image actual height
          />
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            src={heroimgTow}
            alt="hero image"
            objectFit="cover" // set approx height or use your image actual height
          />
        </div>
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        voluptatibus? Doloremque distinctio maiores nihil praesentium temporibus
        animi iure minus id. Voluptas, ab tempora! Architecto rerum, beatae
        laborum nam, nulla veritatis eius dolore iste ullam vero voluptate,
        commodi voluptatem voluptates asperiores delectus. Perferendis minus
        recusandae non repellendus nihil eius dignissimos fugit architecto
        quibusdam voluptatem, autem excepturi, doloribus ratione sed aliquam
        nostrum sint voluptatum cupiditate libero. Perferendis porro quo odit,
        officia excepturi deserunt, quibusdam quis, officiis impedit itaque sint
        adipisci. Et ad minima dolorem sapiente commodi quasi error, tempora
        adipisci omnis nostrum quos temporibus similique perferendis eius
        laborum ut ipsam iusto dolor sunt dignissimos quibusdam fuga eveniet,
        incidunt aut? Corrupti accusamus distinctio dolorum, voluptate
        architecto aspernatur beatae praesentium velit qui natus! Odio
        voluptatibus quaerat consequatur ea consequuntur quo ad modi animi
        debitis dolor exercitationem, ut explicabo id sint ratione assumenda,
        possimus tempora eius commodi enim quisquam voluptatem consectetur eaque
        dolorem. Corporis consequuntur provident pariatur quo voluptatibus
        quidem reprehenderit, facilis suscipit exercitationem magnam, vel velit
        molestiae distinctio? Eos tenetur numquam praesentium quod! Ipsa autem
        nostrum soluta architecto consequatur accusantium neque quae ratione
        aliquid molestiae, rerum sunt, iste reprehenderit aut voluptatum
        corporis laborum eligendi, asperiores quas tempore eum labore. Unde esse
        aut mollitia, laudantium at non. Consequuntur consequatur voluptatum
        aperiam quasi mollitia neque fugiat fugit amet. Suscipit expedita
        architecto ab similique commodi hic provident alias necessitatibus
        labore adipisci illo, repellendus dignissimos ipsam earum pariatur
        molestiae placeat? Repellat, architecto. Fugiat, cupiditate odio
        molestiae, facilis recusandae doloremque, ab laudantium optio nesciunt
        quam molestias exercitationem at unde repellat? Veniam omnis
        necessitatibus impedit rem suscipit illo, repudiandae ad consequuntur
        quod architecto eaque aut ipsum adipisci debitis. Voluptate voluptatibus
        ab nobis sapiente incidunt necessitatibus soluta aperiam libero dolores
        recusandae deserunt tempore qui eaque, quos harum eveniet voluptatem rem
        dolor magni accusamus aliquam quas! Et voluptatum fugit sint qui
        tenetur?
      </p> */}
    </div>
  );
};

export default Hero;
