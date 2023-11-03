import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const AboutUs = () => {
  const openaiSecretKey = import.meta.env.VITE_OPENAI_KEY;

  const configuration = new Configuration({
    apiKey: openaiSecretKey,
  });

  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:
          "MoGMart adalah website yang menjual produk gadget, laptop, dan aksesori." +
          prompt,
        temperature: 0.5,
        max_tokens: 250,
      });
      setResult(response.data.choices[0].text);
      setShowAlert(true);
      setShowResult(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div
      className="bg-gray-100 min-h-screen py-8"
      style={{
        backgroundImage: `url(${"../assets/homepage-bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-3xl p-6 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Ask a Question</h1>
        <p className="font-medium text-black">
          Ask something about our shop / about our products.
        </p>

        <div className="mb-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder=" "
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          onClick={handleClick}
          disabled={loading || prompt.length === 0}
          className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          {loading ? "Wait for the answer ..." : "Get Answer"}
        </button>

        {showResult && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Answer :</h2>
            <div className="whitespace-pre-line">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
