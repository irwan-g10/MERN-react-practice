import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hooks";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Bandung Indah Center",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam libero fuga ducimus molestias debitis aliquid voluptatem, aspernatur, earum quia, nihil quas sunt qui ipsa. Qui voluptatum sapiente alias fugiat nulla?",
    imageUrl:
      "https://img.inews.co.id/media/822/files/inews_new/2021/02/19/becjpg.jpg",
    address:
      "Jl. Purnawarman No.13-15, Babakan Ciamis, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40117",
    locations: {
      lat: -7.04528,
      lng: 107.58778,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Bandung Indah Plasa 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam libero fuga ducimus molestias debitis aliquid voluptatem, aspernatur, earum quia, nihil quas sunt qui ipsa. Qui voluptatum sapiente alias fugiat nulla?",
    imageUrl:
      "https://img.inews.co.id/media/822/files/inews_new/2021/02/19/becjpg.jpg",
    address:
      "Jl. Purnawarman No.13-15, Babakan Ciamis, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40117",
    locations: {
      lat: -7.0631438,
      lng: 107.4546896,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const indentifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (indentifiedPlace) {
      setFormData(
        {
          title: {
            value: indentifiedPlace.title,
            isValid: true,
          },
          description: {
            value: indentifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, indentifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!indentifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find the place</h2>
        </Card>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description (min 5 character)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
