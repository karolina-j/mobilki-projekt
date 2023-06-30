import React, { useState, useEffect, ChangeEvent, useContext } from "react";
import axios from "axios";

import SelectBox from "./SelectBox";
import type { SelectOption } from "./SelectBox";
import JokeImage from "./JokeImage";
import SaveJokes from "./SaveJokes";
import { AuthContext } from "../context/AuthContext";

type GetJokeProps = {
    category: string;
    options: SelectOption[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const GetJoke = ({ category, options, onChange }: GetJokeProps) => {
    const user = useContext(AuthContext);

    const [buttonText, setButtonText] = useState("Chuck Norris");

    const [input, setInput] = useState({
        jokeName: "",
    });

    const [jokeState, setJokeState] = useState({
        joke: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        const newname = e.target.value;
        if (newname == "") {
            setButtonText("Chuck Norris");
        } else {
            setButtonText(newname);
        }
    };

    const API_LINK = "https://api.chucknorris.io/jokes/random";

    const fetchJoke = async (apiLink: string): Promise<string> => {
        const result = await axios.get(apiLink);

        console.log(result.data.value);

        setJokeState({
            ...jokeState,
            joke: result.data.value,
        });

        return result.data.value;
    };

    const fetchChosenJoke = (): Promise<string> => {
        let fetchedJoke;

        if (category != "") {
            console.log("category in fetching comp.: ", category);

            if (input.jokeName == "") {
                const apiLink = `${API_LINK}?category=${category}`;

                fetchedJoke = fetchJoke(apiLink);
            } else {
                const apiLink = `${API_LINK}?name=${input.jokeName}&category=${category}`;
                console.log(apiLink);
                fetchedJoke = fetchJoke(apiLink);
            }
        } else {
            if (input.jokeName == "") {
                fetchedJoke = fetchJoke(API_LINK);
            } else {
                const apiLink = `${API_LINK}?name=${input.jokeName}`;

                fetchedJoke = fetchJoke(apiLink);
            }
        }
        return fetchedJoke;
    };

    const initialJoke = () => {
        fetchChosenJoke();
    };

    useEffect(() => {
        initialJoke();
    }, []);

    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        console.log("click event curr target: ", e.currentTarget);

        fetchChosenJoke();
    };

    return (
        <div className="GetJoke">
            <JokeImage nameInput={input.jokeName} />

            <div className="jokeQuote"> {jokeState.joke} </div>

            {user && (
                <>
                    <SelectBox
                        className="selectCategory"
                        options={options}
                        value={category}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        placeholder="Draw Chuck joke"
                        className="GetJoke-input"
                        value={input.jokeName}
                        onChange={handleChange}
                        name="jokeName"
                    />
                </>
            )}

            <button className="GetJoke-btn" onClick={handleClick}>
                Draw a random {buttonText} joke
            </button>

            {user && <SaveJokes fetchChosenJoke={fetchChosenJoke} />}
        </div>
    );
};

export default GetJoke;
