// **************************************
// IF WE HAVE TOO MANY TYPES TO WORK WITH
// **************************************

//Reusable type in multiple places
export type Name = {
    first: string;
    last: string;
}

type PersonProps = {
    name: Name;
};

export default PersonProps;