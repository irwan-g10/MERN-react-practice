import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
};
export default UserPlaces;
