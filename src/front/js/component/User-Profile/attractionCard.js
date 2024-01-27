import React, { useReducer } from "react";

export const AttractionCard = ({
    property1,
    className,
    image = "image-5.png",
    text = "National Park",
    text1 = "State",
    phStar = "ph-star.svg",
    line = "line-3.svg",
    text2 = "Activity Type",
    img = "line-4.svg",
    icon = <IconComponentNode className="favs-instance" />,
}) => {
    const [state, dispatch] = useReducer(reducer, {
      property1 : property1 || "active-1",
    });

    return(
        <div className={`attraction-card ${className}`}>
            <img className="image" alt="image" src={state.property1 === "variant-4" ? "image.png": image} />
            <div className="frame"> 
                <div className="div">
                    <div className="frame-2">
                        <div className="national-park">
                            {text}
                        </div>
                        <div className="state">
                            {text1}
                        </div>
                    </div>
                    <div className="frame-3">
                        <div className="frame-4">
                            <img className="ph-star" alt="Ph star" src={state.property1 === "variant-4" ? "ph-star-2.svg" : phStar} />
                            <div className="text-wrapper">
                                5.0 Rating
                            </div>
                        </div>
                    <img className="line" alt="Line" src={state.property1 === "variant-4" ? "line-3-2.svg" : line} />
                    <div className="frame-4">
                        <div className="text-wrapper">
                            {text2}
                        </div>
                    </div>
                    <img className="line" alt="Line" src={state.property1 === "variant-4" ? "line-4-2.svg" : img} />
                    <div className="frame-4">
                        <div className="text-wrapper">
                            Lodging
                        </div>
                    </div>
                    </div>
                </div>
                <div className="frame-5">
                    {state.property1 === "active-1" && (
                        <CoolectionButton className="coolection-button-instance" text="Add to my adventure" />
                    )}
                    {state.property1 === " variant-4" && (
                        <button
                            className="div-wrapper"
                            onClick={() => {
                                dispatch("click");
                            }}
                        >
                            <div className="text-wrapper-2"> 
                                Learn More
                            </div>
                        </button>
                    )}
                    {icon}
                </div>
            </div>
        </div>
    );
};

function reducer(state, action) {
    switch(action) {
        case "click":
            return{
                ...state,
                property1: "active-1",
            };
    }
    return state;
}

AttractionCard.propTypes = {
    property1: PropTypes.oneOf(["variant-4", "active-1"]),
    image: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
    phStar: PropTypes.string,
    line: PropTypes.string,
    text2: PropTypes.string,
    img: PropTypes.string
};