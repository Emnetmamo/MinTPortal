import React, { useState } from "react";
import { Container } from "react-bootstrap";
import news from "../images/News/news9.webp";
import new8 from "../images/News/news8.jpeg";
import new7 from "../images/News/news7.jpeg";

import ProjectDescription from "./ProjectDescription";

const Publications = () => {
  return (
    <div>
      <br />
      <div className="" style={{ height: "100pt" }}>
        <h1
          className="bg-dark text-white"
          style={{ fontSize: "50px", textAlign: "center" }}
        >
          Publications
        </h1>
      </div>
      <div className="row justify-content-center mt-5 ">
        <div className="col p-5">
          <div className="row card">
            <img src={news} alt="AI chat system" />
            <h2>Ai chat system</h2>
            <h6 class="mb-0">Author: Dr. Mekonnen Yilma</h6>
            <h6>Date h6ublished: December 4, 2009</h6>
            <button 
            className="btn btn-secondary btn-sm"
              type="button"
              style={{
                  padding:'12px',
                rderRadius: "8px",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "18px",
                width: "30%",
                marginLeft:'2pt',
                border: "1px solid black", // Specify the border style here
                textAlign: "left",
                outline: "none",
              }}
              onClick={() => {
                const content1 = document.getElementById("content1");
                if (
                  content1.style.display === "none" ||
                  content1.style.display === ""
                ) {
                  content1.style.display = "block";
                } else {
                  content1.style.display = "none";
                }
              }}
            >
              See description
            </button>
            <div
              class="content1"
              style={{
                display: "none",
                padding: "0 18px",
                overflow: "hidden",
                backgroundColor: "#f1f1f1",
              }}
              id="content1"
            >
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
                style={{
                
                  borderRadius: "8px",
                  padding: "5px 15px",
                }}
              >
                Download{" "}
              </button>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="col p-5">
          <div className="row card">
            <img src={new8} alt="New 8" style={{}} />
            <h2 className="row">Solar Energy</h2>
            <p class="mb-0">Author: Tomas Mores</p>
            <p>Date published: December 4, 2003</p>
            <button
              type="button"
              style={{
                backgroundColor: "blue",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "18px",
                width: "50%",
                border: "1px solid black", // Specify the border style here
                textAlign: "left",
                outline: "none",
              }}
              onClick={() => {
                const content2 = document.getElementById("content2");
                if (
                  content2.style.display === "none" ||
                  content2.style.display === ""
                ) {
                  content2.style.display = "block";
                } else {
                  content2.style.display = "none";
                }
              }}
            >
              See description
            </button>
            <div
              class="content2"
              style={{
                display: "none",
                padding: "0 18px",
                overflow: "hidden",
                backgroundColor: "#f1f1f1",
              }}
              id="content2"
            >
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
                style={{
                  backgroundColor: "green",
                  borderRadius: "8px",
                  padding: "5px 15px",
                }}
              >
                Download
              </button>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="row justify-content-center mt-5 ">
        <div className="col p-5">
          <div className="row card">
            <img src={news} alt="Exploring the Impact of Climate Change" />
            <h2>Exploring the Impact of Climate Change</h2>
            <p class="mb-0">Author: John Smith</p>
            <p>Date published: October 15, 2023</p>

            <button
              type="button"
              style={{
                backgroundColor: "blue",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "18px",
                width: "50%",
                border: "1px solid black", // Specify the border style here
                textAlign: "left",
                outline: "none",
              }}
              onClick={() => {
                const content1 = document.getElementById("content1");
                if (
                  content1.style.display === "none" ||
                  content1.style.display === ""
                ) {
                  content1.style.display = "block";
                } else {
                  content1.style.display = "none";
                }
              }}
            >
              See description
            </button>
            <div
              class="content1"
              style={{
                display: "none",
                padding: "0 18px",
                overflow: "hidden",
                backgroundColor: "#f1f1f1",
              }}
              id="content1"
            >
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
                style={{
                  backgroundColor: "green",
                  borderRadius: "8px",
                  padding: "5px 15px",
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="row card">
            <img src={new8} alt="New 8" style={{}} />
            <h2 className="row">The Future of Artificial Intelligence</h2>
            <p class="mb-0">Author: Emily Johnson</p>
            <p>Date published: September 28, 2023</p>

            <button
              type="button"
              style={{
                backgroundColor: "blue",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "18px",
                width: "50%",
                border: "1px solid black", // Specify the border style here
                textAlign: "left",
                outline: "none",
              }}
              onClick={() => {
                const content2 = document.getElementById("content2");
                if (
                  content2.style.display === "none" ||
                  content2.style.display === ""
                ) {
                  content2.style.display = "block";
                } else {
                  content2.style.display = "none";
                }
              }}
            >
              See description
            </button>
            <div
              class="content2"
              style={{
                display: "none",
                padding: "0 18px",
                overflow: "hidden",
                backgroundColor: "#f1f1f1",
              }}
              id="content2"
            >
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
                style={{
                  backgroundColor: "green",
                  borderRadius: "8px",
                  padding: "5px 15px",
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5 ">
        <div className="col p-5">
          <div className="row card">
            <img src={news} alt="AI chat system" />
            <h2>Understanding Renewable Energy Sources</h2>
            <p class="mb-0">Author: Michael Anderson</p>
            <p>Date published: November 5, 2023</p>

            <button
              type="button"
              style={{
                backgroundColor: "blue",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "18px",
                width: "50%",
                border: "1px solid black", // Specify the border style here
                textAlign: "left",
                outline: "none",
              }}
              onClick={() => {
                const content1 = document.getElementById("content1");
                if (
                  content1.style.display === "none" ||
                  content1.style.display === ""
                ) {
                  content1.style.display = "block";
                } else {
                  content1.style.display = "none";
                }
              }}
            >
              See description
            </button>
            <div
              class="content1"
              style={{
                display: "none",
                padding: "0 18px",
                overflow: "hidden",
                backgroundColor: "#f1f1f1",
              }}
              id="content1"
            >
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
                style={{
                  backgroundColor: "green",
                  borderRadius: "8px",
                  padding: "5px 15px",
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="row card">
            <img src={new8} alt="New 8" style={{}} />
            <h2 className="row">The Role of Genetics in Disease Prevention</h2>
            <p class="mb-0">Author: Sophia Williams</p>
            <p>Date published: December 12, 2023</p>

            <button
              type="button"
              style={{
                backgroundColor: "blue",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "18px",
                width: "50%",
                border: "1px solid black", // Specify the border style here
                textAlign: "left",
                outline: "none",
              }}
              onClick={() => {
                const content2 = document.getElementById("content2");
                if (
                  content2.style.display === "none" ||
                  content2.style.display === ""
                ) {
                  content2.style.display = "block";
                } else {
                  content2.style.display = "none";
                }
              }}
            >
              See description
            </button>
            <div
              class="content2"
              style={{
                display: "none",
                padding: "0 18px",
                overflow: "hidden",
                backgroundColor: "#f1f1f1",
              }}
              id="content2"
            >
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
                style={{
                  backgroundColor: "green",
                  borderRadius: "8px",
                  padding: "5px 15px",
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
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
