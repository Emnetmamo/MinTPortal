import React, { useState } from "react";
import { Container } from "react-bootstrap";
import news from "../images/News/news9.webp";
import new8 from "../images/News/news8.jpeg";
import new7 from "../images/News/news7.jpeg";
import "./assets/publication.css";
import ProjectDescription from "./ProjectDescription";

const Publications = () => {
  return (
    <div>
      <br />
      <div className="" style={{ height: "100pt" }}>
        <h1
          className="bg-dark text-white"
          style={{ fontSize: "70px", textAlign: "center" }}
        >
          Publications
        </h1>
      </div>
      <div className=" d-flex row justify-content-center mt-5 ms-5 me-5 align-items- center ">
       

        <div className="col p-5">
          <div className="row card" id="card">
            <img src={news} alt="AI chat system" id="image" />
            <h2>Ai chat system</h2>
            <h6 class="mb-0">Author: Dr. Mekonnen Yilma</h6>
            <h6>Date published: December 4, 2009</h6>
            <div className="" id="notes">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <br />
            <div className="mx-auto d-block">
              {" "}
              <b>do you want to download the file?</b>
              <button className="btn " id="button ">
                download
              </button>
            </div>{" "}
          </div>{" "}
          <br />
        <br />
          <div className="row card "  id="card">
            <img src={new8} alt="New 8" id="image" />
            <h2 className="row">The Future of Artificial Intelligence</h2>
            <p class="mb-0">Author: Emily Johnson</p>
            <p>Date published: September 28, 2023</p>

            <div class="content2" id="notes">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <br />

            <div className="mx-auto d-block">
              {" "}
              <b>do you want to download the file?</b>
              <button
                href=""
                download="downloaded-file-name.pdf"
                className="btn btn-success"
                id="button"
              >
                Download
              </button>
            </div>
          </div>
          <br />
        <br />
          <div className="row card p-5" id="card">
    <img src={new8} alt="New 8" id="image" />
    <h2 className="row">The Role of Genetics in Disease Prevention</h2>
    <p className="mb-0">Author: Sophia Williams</p>
    <p>Date published: December 12, 2023</p>

    <div id="notes">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </div>
    <br />

    <div className="mx-auto d-block">
      {" "}
      <b>Do you want to download the file?</b>
      <button
        href=""
        download="downloaded-file-name.pdf"
        className="btn"
        id="button"
      >
        Download
      </button>
    </div>
  </div>
        </div>{" "}
       
       


        <div className="col p-5">
          <div className="row card " id="card">
            <img src={new8} alt="New 8" id="image" />
            <h2 className="row">Solar Energy</h2>
            <p class="mb-0">Author: Tomas Mores</p>
            <p>Date published: December 4, 2003</p>
            <div id="notes">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <br />
            <div className="mx-auto d-block">
              {" "}
              <b>do you want to download the file?</b>
              <button
                href=""
                download="downloaded-file-name.pdf"
                className="btn "
                id="button"
              >
                Download
              </button>
            </div>{" "}
         
          </div>{" "}
          <br />
        <br />
          <div className="row card me-2" id="card">
            <img src={news} alt="AI chat system" id="image"/>
            <h2>Understanding Renewable Energy Sources</h2>
            <p class="mb-0">Author: Michael Anderson</p>
            <p>Date published: November 5, 2023</p>

            <div class="content1" id="notes">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <br />
            <div className="mx-auto d-block">
              {" "}
              <b>do you want to download the file?</b>
              <button
                href=""
                download="downloaded-file-name.pdf"
                className="btn "
                id="button"
              >
                Download
              </button>
            </div>
          </div>
          <br />
        <br />
          <div className="row card p-5" id="card">
    <img
      src={news}
      alt="Exploring the Impact of Climate Change"
      id="image"
    />
    <h2>Exploring the Impact of Climate Change</h2>
    <p className="mb-0">Author: John Smith</p>
    <p>Date published: October 15, 2023</p>

    <div className="content1" id="notes">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </div>
    <br />
    <div className="mx-auto d-block">
      {" "}
      <b>Do you want to download the file?</b>
      <button
        href=""
        download="downloaded-file-name.pdf"
        className="btn"
        id="button"
      >
        Download
      </button>
    </div>
  </div>
        </div>{" "}

      


       

       
      </div>

      <br></br>
      <br />
      <div
        className="d-flex justify-content-end"
        style={{ marginRight: "50px" }}
      >
        <button className="btn btn-primary">
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Next Page
          </a>
        </button>
      </div>
      <br />
    </div>
  );
};

export default Publications;
