import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Recorded from "../storage/records.json";

const CardWork = () => {
  return Recorded.map((record) => {
    return (
      <>
        <Card className="mt-2 w-60">
          <CardHeader color="blue-gray" className="relative h-25">
            <img
              src={require("../img/MyWork/"+record.img)}
              className="hover:scale-110 transition-all duration-500"
              alt="IMG"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h8" color="blue-gray" className="mb-2">
              {record.title}
            </Typography>
            <Typography className=" text-[10px]">
              {record.content}
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
  });
};
export default CardWork;
