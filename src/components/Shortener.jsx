import React, { useEffect, useState } from "react";
import urlBg from "../assets/images/bg-shorten-desktop.svg";
import urlBgMob from "../assets/images/bg-shorten-mobile.svg";

const Shortener = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [link, setLink] = useState([])
    const [resultUrl, setResultUrl] = useState([]);
    const [btnIndex, setBtnIndex] = useState(null);

    const handleSubmit = async () => {
        try {
            if (originalUrl === '') {
                alert("Url not given")

            } else {
                const response = await fetch('https://api-ssl.bitly.com/v4/shorten',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer f8dbb2fd8e6e9bbcb80e756a48844b43ee8bd260'
                        },
                        body: JSON.stringify({
                            'long_url': originalUrl
                        })
                    });

                const data = await response.json();
                const link = data.link;
                setResultUrl(prev => [...prev, link]);
                setLink(prev => [...prev, originalUrl]);
                setOriginalUrl('');
            }
        } catch (error) {
            console.log(error);
            alert("Error occured!!")

        }
    }
    const handleCopy = (index) => {
        navigator.clipboard.writeText(resultUrl[index])
        setBtnIndex(index);
    }

    useEffect(() => {
      
}, [resultUrl, link]

    )

    return (
        <>
            <div className="md:pt-8">
                <div className="rounded-xl mx-5 relative overflow-hidden md:mx-56 bg-slate-800">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={urlBg} />
                        <img src={urlBgMob} alt="" className="w-full h-32" />
                    </picture>
                    <div className="absolute top-3 right-3 left-3 md:mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
                        <input
                            type="text"
                            name="url"
                            id="url"
                            placeholder="Enter link to make it shorter..."
                            className="py-2 pl-4 md:col-span-3 rounded-md"
                            autoFocus
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-purple-600 hover:bg-red-400 text-xl text-white font-semibold py-2 rounded-md">
                            Short
                        </button>
                    </div>
                </div>
                <div className="md:mx-32">
                    <ul className="rounded-md mx-5 my-5">
                        {resultUrl &&
                            resultUrl.map((links, index) => (
                                <li key={index} className="flex rounded-sm text-center flex-col md:flex-row justify-between mx-5 my-2 px-3 py-2 bg-white">
                                    <p className=" font-semibold mb-2">
                                        {index + 1}. {link[index].substring(0, 30)}...
                                    </p>
                                    <p className="mx-auto w-fit px-3 font-semibold text-blue-800">
                                        {links}
                                    </p>
                                    <button
                                        className="bg-cyan-400 text-white font-semibold px-8 rounded-md focus:bg-cyan-800 hover:bg-cyan-300"
                                        onClick={()=> handleCopy(index)}>
                                        { 
                                        btnIndex === index ? "Copied!" : "Copy"
                                        }
                                        </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Shortener;
