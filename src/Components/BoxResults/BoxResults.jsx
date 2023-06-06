// Libraries
import React from "react";

// Styles
import { MainContainer } from "./styles";

const BoxResults = ({ data }) => {
  return (
    data && (
      <MainContainer>
        {data?.events?.map((item, i) => (
          <>
            <div className="item">
              <img
                width={70}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://static.thenounproject.com/png/3237447-200.png";
                }}
                src={item?.performers[0]?.hero_image_url}
                alt="event"
              />
              <div className="box-info">
                <p className="title">{item?.event?.name}</p>
                <p className="subtitle">{item?.venue?.name}</p>
              </div>
            </div>
            <hr />
            <div className="item">
              <img
                width={70}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://static.thenounproject.com/png/3237447-200.png";
                }}
                src={item?.venue?.image_url}
                alt="venue"
              />
              <div className="box-info">
                <p className="title">{item?.venue?.name}</p>
                <p className="subtitle">{item?.venue?.city}</p>
              </div>
            </div>
            <hr />
            <div className="item">
              <img
                width={70}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://static.thenounproject.com/png/3237447-200.png";
                }}
                src={item?.performers[1]?.hero_image_url}
                alt="performer"
              />
              <div className="box-info">
                <p className="title">{item?.performers[1]?.name}</p>
                <p className="subtitle">{item?.performers[1]?.category}</p>
              </div>
            </div>
            <hr />
          </>
        ))}
      </MainContainer>
    )
  );
};

export default BoxResults;
