// 1. Static Metadata

// export const metadata = {
//     title: "Home",
// };


// 2. Dynamic Metadata

export async function generateMetadata({ params }: { params: any }) {
    const product = await fetch(params.id);
    return {title: product.blob};
}

export default function Page(){
    return (
            <h1>Home with Dynamic Metadata</h1>
    )
}


