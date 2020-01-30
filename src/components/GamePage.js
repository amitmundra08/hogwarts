import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import HouseModal from "./HouseModal";
import gryfindor from "../img/gryfindor.gif";
import slytherin from "../img/slytherin.gif";
import huffflepuff from "../img/huffflepuff.gif";
import ravenclaw from "../img/ravenclaw.gif";

var backgroundImage = {
    width: "100%",
    height: "800px",
    backgroundImage: "url('img/User.gif')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
};

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            selectedHouse: "",
            showHouseModal: false,
            selectedImage: "",
            showLoader: false
        };
    }
    handleName = event => {
        const target = event.target.value;
        this.setState({ name: target });
    };

    closeHouseModal = () => {
        this.setState({ showHouseModal: false, selectedHouse: "" });
    };

    submitForm = () => {
        this.setState({ showLoader: true });
        setTimeout(() => {
            const { name = "" } = this.state;
            if (name && name.length > 0) {
                const data = [
                    {
                        name: "Ankur Mehta",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Lokesh Daga",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Abhishek L",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Aadi B",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Darshan P",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Foram S",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Laksh D",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Shaan P",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Ved R",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Heer D",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Dhwani S",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Milonee J",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Sneha D",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Yashvi J",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Pal C",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Dyash",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Harshil",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Nandan",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Tanmay P",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Rudraksh",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Tathagat",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Diwa R",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Ipsita",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Nandni",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Shrinali",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Stuti",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Nirva",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Rutvi",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Pearl",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Aditya",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Bhavishya",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Hutarth",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Jash",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Manas",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Tanmay S",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Vishad",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Kashvi",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Jahaan",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Paree",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Preeti",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Viva",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Prapti",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Dhruvil",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Dhyanam",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Kush",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Minesh",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Prem",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Shanay",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Dhwani J",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Jiya",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Vrinda",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Khushi",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Krisha",
                        house: "Ravenclaw",
                        img: ravenclaw
                    }
                    
                ];
                const filterArray = data.filter(
                    singleData =>
                        name.toUpperCase() === singleData.name.toUpperCase()
                );
                if (filterArray.length > 0) {
                    const selectedHouse = filterArray[0].house;
                    const selectedImage = filterArray[0].img;
                    this.setState({
                        selectedHouse,
                        name: "",
                        showHouseModal: true,
                        selectedImage,
                        showLoader: false
                    });
                } else {
                    const houses = [
                        {
                            house: "Gryffindor",
                            img: gryfindor
                        },
                        {
                            house: "Slytherin",
                            img: slytherin
                        },
                        {
                            house: "Hufflepuff",
                            img: huffflepuff
                        },
                        {
                            house: "Ravenclaw",
                            img: ravenclaw
                        }
                    ];
                    const max = 3;
                    const min = 0;
                    const randomNumber =
                        Math.floor(Math.random() * (max - min + 1)) + min;
                    const selectedHouse = houses[randomNumber];
                    if (selectedHouse && selectedHouse.house) {
                        const selectedHouse = houses[randomNumber].house;
                        const selectedImage = houses[randomNumber].img;
                        this.setState({
                            showLoader: false,
                            selectedHouse,
                            selectedImage,
                            showHouseModal: true
                        });
                    } else {
                        this.setState({ showLoader: false });
                        alert("Something went wrong. Please retry.");
                    }
                }
            }
        }, 3000);
    };
    render() {
        return (
            <div className="App-header">
                <img
                    src={gryfindor}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}
                    alt="image"
                />
                <img
                    src={slytherin}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                    alt="image"
                />
                <img
                    src={huffflepuff}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        bottom: 0,
                        right: 0
                    }}
                    alt="image"
                />
                <img
                    src={ravenclaw}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        bottom: 0,
                        left: 0
                    }}
                    alt="image"
                />
                <div style={backgroundImage}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "absolute"
                        }}
                    >
                        {!this.state.showLoader ? (
                            <div>
                                <div style={{ marginTop: 16 }}>
                                    Enter your name
                                </div>
                                <input
                                    onChange={this.handleName}
                                    type="text"
                                    className="form-control mb-2 mr-sm-2 mb-sm-0 mt-2"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                />
                                <ButtonContainer
                                    onClick={() => this.submitForm()}
                                    style={{ marginTop: 24, width: 200 }}
                                >
                                    Submit
                                </ButtonContainer>
                            </div>
                        ) : (
                            undefined
                        )}
                        {this.state.showHouseModal ? (
                            <div
                                style={{
                                    position: "absolute",
                                    width: "500px",
                                    top: 0,
                                    bottom: 0
                                }}
                            >
                                <HouseModal
                                    selectedHouse={this.state.selectedHouse}
                                    closeHouseModal={this.closeHouseModal}
                                    selectedImage={this.state.selectedImage}
                                />
                            </div>
                        ) : (
                            undefined
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default GamePage;
