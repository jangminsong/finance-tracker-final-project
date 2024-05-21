import React from "react";
import { Input, Typography } from "@material-tailwind/react";

function Account1() {
  return (
    <section className="px-8 py-20 container mx-auto">
      <Typography
        variant="h5"
        color="blue-gray"
        className="mb-2 font-medium text-3xl"
      >
        Expense/Income Information
      </Typography>
      <Typography variant="small" className="text-gray-600 font-normal mt-1">
        Update your information below.
      </Typography>
      <div className="flex flex-col mt-8">
        <div className="mb-6 flex flex-col items-start gap-4 md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium text-1xl"
            >
              Title
            </Typography>
            <div className="relative">
              <Input
                size="lg"
                placeholder="Shopping, Pay Day, ..."
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 h-16 text-xl rounded-none"
                style={{ border: "2px solid #d1d5db", borderRadius: "0" }} // Explicitly setting the border color, width, and removing border radius
                containerProps={{
                  className: "h-full",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-start gap-4 md:flex-row w-full">
          <div className="w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium text-1xl"
            >
              Amount
            </Typography>
            <Input
              size="lg"
              placeholder="10, -150..."
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 h-16 text-xl rounded-none"
              style={{ border: "2px solid #d1d5db", borderRadius: "0" }} // Explicitly setting the border color, width, and removing border radius
              containerProps={{
                className: "h-full",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account1;
