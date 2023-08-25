import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

import FileBrowser from '../components/shared/FileBrowser';
import MultiSelectDropdown from '../components/shared/MultiSelectDropdown';

const HomeDashboard = () => {
  return (
    <>
      <h1 className="text-xl">Dashboard</h1>

      <div class="flex flex-row">
        <div class="basis-1/4"></div>
        <div class="basis-1/2">
          <Card className="my-5 p-5 z-0">
            <label class="block">
              <div class=" mb-3">Select File</div>
              <FileBrowser />
            </label>

             
          </Card>
          <Card className="my-5 p-5">
          <label class="block">
            <div class=" mb-3">Select File</div>
            <FileBrowser />
          </label>

           
        </Card>
        <Card className="my-5 p-5">
          <label class="block">
            <div class=" mb-3">Select File</div>
            <MultiSelectDropdown/>
          </label>

           
        </Card>
        </div>
        <div class="basis-1/4"></div>
      </div>
    </>
  );
}

export default HomeDashboard