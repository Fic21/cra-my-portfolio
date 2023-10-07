import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import ImgWork1 from "../img/MyWork/iot project.png";
import ImgWork2 from "../img/MyWork/WebDTS20.png";
import ImgWork3 from "../img/MyWork/androiddev.svg";
import ImgWork4 from "../img/MyWork/WebDicoding.png";


const CardWork = () => {
  return (
    <>
      <Card className="mt-2 w-60">
        <CardHeader color="blue-gray" className="relative h-25">
          <img
            src={ImgWork1}
            className="hover:scale-110 transition-all duration-500"
            alt=""
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h8" color="blue-gray" className="mb-2">
            IoT Project
          </Typography>
          <Typography className=" text-[10px]">
            Project ini adalah sistem keamanan kendaran bermotor. Berfungsi
            untuk monitoring posisi kendaraan bermotor serta fungsi remote jarak
            jauh berbasis web.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded normal-case">
            Read More
          </Button>
        </CardFooter>
      </Card>
      {/* bagian dua  */}
      <Card className="mt-2 w-60">
        <CardHeader color="blue-gray" className="relative h-25">
          <img
            src={ImgWork2}
            className="hover:scale-110 transition-all duration-500"
            alt=""
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h8" color="blue-gray" className="mb-2">
            Web DTS 2020
          </Typography>
          <Typography className=" text-[10px]">
            Membangun Project Web untuk keperluan syarat lulus DTS 2020 HTML
            ,CSS dan Js. Lalu pada saat itu saya di percayai teman satu tim
            untuk jadi ketua tim sehingga bisa sukses lulus.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded normal-case">
            Read More
          </Button>
        </CardFooter>
      </Card>
      {/* bagian3 */}
      <Card className="mt-2 w-60">
        <CardHeader color="blue-gray" className="relative h-25">
          <img
            src={ImgWork3}
            className="hover:scale-110 transition-all duration-500"
            alt=""
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h8" color="blue-gray" className="mb-2">
            Android Dev 2021
          </Typography>
          <Typography className=" text-[10px]">
            Project akhir syarat lulus DTS PROA Android Developer Kotlin.
            Aplikasi yang dibuat adalah aplikasi android Github User yang bisa
            mencari data pengguna Github melalui API Github.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded normal-case">
            Read More
          </Button>
        </CardFooter>
      </Card>
      {/* bagian4*/}
      <Card className="mt-2 w-60">
        <CardHeader color="blue-gray" className="relative h-25">
          <img
            src={ImgWork4}
            className="hover:scale-110 transition-all duration-500"
            alt=""
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h8" color="blue-gray" className="mb-2">
            Project Web Dicoding 2023
          </Typography>
          <Typography className=" text-[10px]">
            Project bebas membangun Web Responsive menggunakan HTML dan CSS
            salah satu syarat lulus pelatihan dicoding dasar pemograman WEB.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded normal-case">
            Read More
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardWork;
