import React, { useEffect, useState } from "react";

const getLocalStorage = () => {
    let link = localStorage.getItem("link")
  
    if (link) {
      return JSON.parse(localStorage.getItem("link"))
    } else {
      return []
    }
  }
  

const Shortener = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [link, setLink] = useState([])
    const [resultUrl, setResultUrl] = useState(getLocalStorage());
    const [btnIndex, setBtnIndex] = useState(null);
    const isValidUrl = (url) => {
        // Regular expression to match URL format
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      
        // Test if the URL matches the pattern
        return urlPattern.test(url);
      };

    const handleSubmit = async () => {
        try {
            if (originalUrl === '') {
                alert("Url not given")

            } else if (isValidUrl(originalUrl)) {
                try {
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
                } catch (error) {
                    alert("Error", error)
                }
            
            } else {
                alert("Invalid Url");
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
        localStorage.setItem("links", JSON.stringify(resultUrl))
    }, [resultUrl, link]

    )

    return (
        <>
            <div className="md:pt-8">
                <div className="rounded-xl mx-5 border-2 py-14 px-8 border-purple-900  md:mx-56">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        <input
                            type="text"
                            name="url"
                            id="url"
                            placeholder="Enter link to make it shorter..."
                            className="py-3 pl-4 border-2 border-purple-300 md:col-span-3 rounded-full"
                            autoFocus={true}
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-purple-600 hover:bg-red-700 text-xl text-white font-semibold py-2 rounded-full">
                            Short
                        </button>
                    </div>
                </div>
                <div className="md:mx-32">
                    <ul className="rounded-md mx-5 my-5">
                        {resultUrl &&
                            resultUrl.map((links, index) => (
                                <li key={index} className="bg-purple-100 flex rounded-full text-center flex-col md:flex-row justify-around mx-5 my-2 py-3 md:px-10">
                                    <p className=" font-semibold mb-2">
                                        {index + 1}. {link[index].substring(0, 30)}...
                                    </p>
                                    <p className=" mx-auto mb-2 w-fit px-3 underline font-semibold text-blue-500">
                                        {links}
                                    </p>
                                    <button
                                        className="bg-purple-600 w-fit mx-auto text-white font-semibold px-6 rounded-full focus:bg-red-700 hover:bg-purple-950"
                                        onClick={() => handleCopy(index)}>
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
