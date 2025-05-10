import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (!authStatus) {
    return (
      <div className="w-full flex flex-col justify-center items-center min-h-[60vh]">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="p-8 bg-gradient-to-r from-gray-700 to-gray-500 rounded-xl shadow-xl border-b-4 border-blue-500">
              <h1 className="text-5xl font-bold text-white">
                Login/Signup to read posts
              </h1>
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => navigate('/login')} 
                  className="mr-4 inline-block text-xl px-6 py-3 duration-200 text-white font-semibold hover:bg-blue-600 bg-blue-500 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate('/signup')} 
                  className="inline-block text-xl px-6 py-3 duration-200 text-white font-semibold hover:bg-blue-600 bg-blue-500 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full h-screen/2 py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
    
  );
}

export default Home;
