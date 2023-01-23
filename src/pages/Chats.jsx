import React, {useContext, useEffect} from "react";
import { useState } from "react";
import ChatUserCard from "../components/ChatUserCard.jsx";
import SelectChatWaiter from "../components/SelectChatWait/SelectChatWaiter.jsx";
import PageTitle from "../components/Typography/PageTitle.jsx";
import SectionTitle from "../components/Typography/SectionTitle.jsx";
import response from "../utils/demo/usersData";
import { Avatar, Badge } from "@windmill/react-ui";
import ChatSection from "../components/ChatSection.jsx";
import Sidebar from "../components/Sidebar/index.jsx";
import Main from "../containers/Main.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";
import {useLocation} from "react-router-dom";

const Chats = () =>
{
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelect = (user) => setSelectedChat(user);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() =>
  {
    closeSidebar()
  }, [location])

  return (
      <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Main>
            <div>
              {!selectedChat && <PageTitle>Connect with your customers</PageTitle>}
              {selectedChat && (
                  <div className="flex items-center mt-6">
                    <Avatar className="hidden md:inline-flex" src={selectedChat.avatar} />
                    <p className="mx-3 inline-flex text-2xl font-semibold text-gray-700 dark:text-gray-200">
                      {selectedChat.first_name} {selectedChat.last_name}
                    </p>

                    <Badge type={selectedChat.state === true ? "success" : "danger"}>
                      {selectedChat.state === true ? "Online" : "Away"}
                    </Badge>
                  </div>
              )}

              <div className="grid grid-col md:grid-cols-4 gap-1">
                <div className="md:col-span-3 ">
                  {!selectedChat ? (
                      <div className="mt-32 flex flex-col justify-center items-center">
                        <SelectChatWaiter />
                        <p className="text-gray-600 dark:text-gray-400">Select a chat</p>
                      </div>
                  ) : (
                      <div>
                        <ChatSection messages={selectedChat.messages} />
                      </div>
                  )}
                </div>
                <div className="">
                  <SectionTitle>Contacts</SectionTitle>
                  {response.map((user, id) =>
                  {
                    if (user.messages !== null)
                    {
                      return (
                          <ChatUserCard
                              key={id}
                              avatar={user.avatar}
                              first_name={user.first_name}
                              last_name={user.last_name}
                              state={user.state}
                              handleClick={() => handleSelect(user)}
                          />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </Main>
        </div>
      </div>
  );
};

export default Chats;
