import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

import { parallaxCards, workItems, workSections } from "../constants";

const MCPluginDetails = () => {
  return (
    <div className="w-full h-full relative flex mt-4 flex-col noDesktop:mt-5 p-5">
      <div className="relative flex flex-row h-auto noDesktop:flex-col w-full">
        <motion.video
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          muted
          loop
          autoPlay
          className="w-1/2 noDesktop:w-full"
        >
          <source
            src="./assets/videos/Bukkit-Lobbysystem.mp4"
            type="video/mp4"
          />
        </motion.video>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5"
        >
          <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
            Lobbysystem for multiplayer server
          </p>
          <p className="text-sm tracking-wide text-white mb-5">
            This plugin offers multiplayer servers a whole lobby system for
            their players. The plugin offers the possibility to create several
            lobbies on a single server, between which the players can switch. In
            addition to a ranking system for players, there is also a friend and
            party system where you can make friends with other players and play
            together. There are many different features that you have to pay
            coins for, such as special items, pets, clothes or skills that
            provide a fun aspect. The selection of features also depends on the
            player's rank. In addition to a teleporter that takes players to
            different locations in the lobby, there is the option to view your
            profile and thus a list of your friends as well as the option to
            change your personal user experience by switching things in the
            general settings. And the best thing is: the server host can change
            many things such as the design or the language in the plugin's
            config files. In order to use the plugin, it is necessary to specify
            a MySQL connection, as all the data is stored in a database.
          </p>
        </motion.div>
      </div>
      <div className="relative flex flex-row h-auto noDesktop:flex-col w-full mt-[4rem]">
        <motion.video
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          muted
          loop
          autoPlay
          className="w-1/2 noDesktop:w-full"
        >
          <source src="./assets/videos/Bukkit-Jumper.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5"
        >
          <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
            Minigame - Jumper
          </p>
          <p className="text-sm tracking-wide text-white mb-5">
            The aim of the mini-game “Jumper” is to jump onto blocks surrounded
            by water and reach the finish line. If you fall into the water, you
            lose and have to restart from the beginning/last checkpoint. Each
            block gives the player a specific effect that either helps or
            hinders the gameplay. You can add as many checkpoints to the game as
            you like. The plugin has a sign system that provides signs that
            players can use to join rounds. The signs show the status of the
            round and update automatically. Server owners have the option of
            changing the scoreboard, messages and design of the signs in the
            plugin's config files. Jumper uses MySQL to store data in the
            database.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
        className="relative flex items-center w-full mt-[2rem] pb-[3rem]"
      >
        <p className="text-sm tracking-wide text-white">
          I have been working on more projects with the Bukkit API in Java, but
          many were smaller projects or not finished. At a certain point, I
          decided to continue to extend my knowledge of programming in other
          areas such as Web-Development.
        </p>
      </motion.div>
    </div>
  );
};

const SocialMediaAppDetails = () => {
  return (
    <div className="w-full h-full relative flex mt-4 flex-col noDesktop:mt-5 p-5">
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full noDesktop:m-0 mr-4"
        >
          <img src="./assets/images/memories_app/memories-home.png" />
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Memories - Social Media App
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              As with well-known social media apps, Memories is all about
              sharing your own experiences with your friends and keeping up to
              date with your friends' lives. The app offers basic features such
              as sharing posts, following friends, direct messages, commenting
              and more. The app also has a dark mode and an option to change the
              language between English and German. The image on the left shows
              the app's home screen, which displays the latest posts. Memories
              is responsive for all kinds of devices.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full"
        >
          <img
            src="./assets/images/memories_app/memories-auth.png"
            height="90%"
          />
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Authentification
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              In order to use Memories to its full extent, registration is
              required, which is possible either by creating an account or by
              logging in via Google. The user must confirm their email address
              via a link in order to be able to log in. The data is stored
              encrypted in a database to ensure protection. The login data can
              also be changed later in the settings.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full mr-4"
        >
          <video muted loop autoPlay>
            <source
              src="./assets/videos/memories-settings.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Settings
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              The app has a notification system in which a message is sent to
              the user via push notifications. The notifications can be managed
              in the settings. You can also change your password or user name as
              well as the language or design.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full"
        >
          <video muted loop autoPlay>
            <source
              src="./assets/videos/memories-search.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Searching Tool
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              The search function includes a search bar where you can either
              search for posts or profiles. The system searches the database for
              matching characters, be it the user name, profile description,
              post title or post description
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full mr-4"
        >
          <video muted loop autoPlay>
            <source
              src="./assets/videos/memories-profile.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Profile
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              Users can view your profile to find out more about you. You can
              customize your profile to your own taste. There is also a follower
              function that allows you to stay in even closer contact with your
              friends by receiving notifications when there is news about your
              friends! The profile also shows all the posts published by this
              person.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full"
        >
          <video muted loop autoPlay>
            <source
              src="./assets/videos/memories-messages.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Direct Messages
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              Memories includes the function to send direct messages to friends.
              The chats are displayed under the “Messages tab”. Below this are
              the people you have recently written to and suggested chats with
              people you follow or who follow you.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5 pb-[4rem]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row h-auto noDesktop:flex-col w-full mr-4"
        >
          <video muted loop autoPlay>
            <source
              src="./assets/videos/memories-posts.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Create and edit posts
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              Posts can be created under the “Posts tab”, from where you can
              also edit posts later. The posts consist of a title, an image,
              tags and the message itself. The content of the posts is stored in
              a database and the images in a cloud. I used Cloudinary as my
              cloud storage of choice. The posts tab has a preview where you can
              see the final result of the post before it is sent. The post
              appears in the home feed where other users can like, comment and
              save your post. The post will then be added to your profile.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ReactNativeDetails = () => {
  return (
    <div className="w-full h-full relative flex mt-4 flex-col noDesktop:mt-5 p-5">
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full mr-4"
        >
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-Home.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              7InTheWild - Mobile App
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              The “7InTheWild” app revolves around the theme of the German
              survival show “7vsWild”. The app was built with the Javascript
              framework React Native and Expo and is compatible for both Android
              and IOS. 7InTheWild is all about connecting with other fans of the
              survival show and staying up to date with the latest news through
              blog posts. Surveys and blog posts give entertainment and the app
              provides information about the concept of “7vsWild” itself.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, damping: 0, delay: 0.2 }}
          className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full"
        >
          <img
            src="./assets/images/7InTheWild/7InTheWild-register.jpg"
            height="90%"
          />
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Authentification
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              In order to use 7InTheWild to its full extent, registration is
              required, which is possible either by creating an account or by
              logging in via Google. The login data can also be changed later in
              the settings.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <div className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full mr-4">
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-Profile.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Profile
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              Users can view your profile to find out more about you. You can
              customize your profile to your own taste by editing the
              description and profile picture. The profile also shows all your
              posted surveys so far and your favorite person of the series you
              voted for!
            </p>
          </div>
        </div>
        <div className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full">
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-Survey.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Create Surveys
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              In the “Create survey" tab you have the option of creating your
              own surveys for the community. At the bottom of the page you can
              preview the final result of your survey. There's also the
              possibility of editing your survey afterwards.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <div className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full mr-4">
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-Messages.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Messages
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              The app has a messages system where you can send messages to other
              users. The chat updates live in real time and a notification is
              sent to the other user unless they have the chat open or have
              switched off notifications in the settings. It is possible to
              delete or clear chats. There is also a search function that allows
              you to find profiles by searching for profile names.
            </p>
          </div>
        </div>
        <div className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full">
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-LiveChat.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Live Chat
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              7InTheWild has a LiveChat function that provides a global chat
              where every user (even unregistered) can broadcast messages to
              everyone else. There is also the option to reply to other messages
              as shown in the video opposite.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <div className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full mr-4">
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-Discover.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Discovery-Feed
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              The “Discover” tab is divided into two sections. On the one hand,
              the latest blog posts are displayed here to keep you up to date
              and, on the other hand, you can watch the latest YouTube videos on
              the topic of “7vsWild”, which are retrieved using the YouTube API.
              It is possible to search for blog posts by title and content or to
              filter by tags or time. The blog posts are created using a
              specially developed admin panel and they are hosted by the app
              owner (more on this topic below)
            </p>
          </div>
        </div>
        <div className="relative flex flex-row w-1/2 h-auto noDesktop:flex-col noDesktop:w-full">
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-Voting.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Voting
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              In the “Voting” tab of the app, there is a ranking of the
              currently most popular persons in the series, which you can vote
              for yourself below. There are also statistics for voting for your
              favorites. The two other tabs contain the daily surveys and the
              surveys provided by the community. You can take part in surveys by
              voting and there is a function for reacting to surveys or
              commenting on them.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <div className="relative flex flex-row h-auto noDesktop:flex-col w-full mr-4">
          <video muted loop autoPlay>
            <source
              src="./assets/videos/7InTheWild-Settings.mp4"
              type="video/mp4"
              width="10%"
              height="auto"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Settings
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              The app has a notification system that you can configure in the
              settings. Under the “Account” tab, you can manage your personal
              data and set the font and background for chats. The app
              theoretically has a premium version, which turns off any
              advertisements when purchased and enables dark mode. General
              questions about using the app and questions about “7vsWild” are
              answered under the “FAQ” tab. You also have the option of logging
              out of your account or deleting your account via the settings.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <div className="relative flex flex-row h-auto noDesktop:flex-col w-full mr-4">
          <video muted loop autoPlay className="w-1/2 noDesktop:w-full">
            <source
              src="./assets/videos/7InTheWild-AP-Home.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Admin Panel - Home
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              The admin panel is a web app developed with ReactJS and is
              connected to the 7InTheWild backend as the mobile app itself. The
              admin panel allows the app owner to publish, edit and delete blog
              posts as well as daily surveys, which are then displayed in the
              app.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5">
        <div className="relative flex flex-row h-auto noDesktop:flex-col w-full mr-4">
          <video muted loop autoPlay className="w-1/2 noDesktop:w-full">
            <source
              src="./assets/videos/7InTheWild-AP-Post.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Admin Panel - Create Blog Posts
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              You can create blog posts under the “Create Post” tab. A
              Javascript library is used that translates the visual text into
              HTML and then makes it compatible for the mobile app in which the
              blog posts are ultimately displayed. There is a cloud storage
              where you can upload local images and insert them into your post
              using an URL. You also have the option of inserting images from
              the Internet via an URL. The editor has the option of previewing
              the blog post to see the final result before publishing the post.
              You also have the option of editing the blog posts again later.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full noDesktop:h-auto h-full relative flex noDesktop:flex-col mt-[5rem] noDesktop:mt-5 pb-[4rem]">
        <div className="relative flex flex-row h-auto noDesktop:flex-col w-full mr-4">
          <video muted loop autoPlay className="w-1/2 noDesktop:w-full">
            <source
              src="./assets/videos/7InTheWild-AP-Survey.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col items-start h-auto w-full pl-7 noDesktop:p-0 noDesktop:mt-5">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
              Admin Panel - Create Surveys
            </p>
            <p className="text-sm tracking-wide text-white mb-5">
              Under the “Create Survey” tab, you have the option of creating a
              daily survey. You can enter up to ten different answer options.
              The surveys can also be edited again at a later point in time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkDetailsModal = ({ showDetails, onRequestClose, activeSection }) => {
  return (
    <Modal
      isOpen={showDetails}
      onRequestClose={onRequestClose}
      contentLabel="Work Modal"
      style={{
        overlay: {
          backgroundColor: "transparent",
        },
        content: {
          border: "1px solid #ffa600",
          overflow: "auto",
          borderRadius: "4px",
          outline: "none",
          backgroundColor: "#080f16",
        },
      }}
      shouldCloseOnEsc
    >
      <div className="w-full h-full relative flex flex-col">
        <IoClose
          className="absolute right-0 top-0 cursor-pointer z-30"
          size={20}
          color="white"
          onClick={onRequestClose}
        />

        <div className="w-full h-fit relative flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, damping: 0, delay: 0.2 }}
            className="text-[#ffa600] font-sono_bold font-bold text-3xl tracking-[.1em] mb-2"
          >
            More Details
          </motion.p>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, damping: 50 }}
            className="bg-white h-[5px] absolute bottom-0 left-1/2 translate-x-[-50%]"
          />
        </div>

        <div className="w-full h-full relative">
          {activeSection == "mc-plugin-development" ? (
            <MCPluginDetails />
          ) : null}
          {activeSection == "social-media-app" ? (
            <SocialMediaAppDetails />
          ) : null}
          {activeSection == "react-native-app" ? <ReactNativeDetails /> : null}
        </div>
      </div>
    </Modal>
  );
};

const Single = ({ item, activeSection, handleDetailsModal }) => {
  const handleBtnAction = () => {
    handleDetailsModal(true);
  };

  return (
    <motion.section
      id={item.id}
      className="work-section text-white flex justify-center items-center w-full"
    >
      <div className="flex items-center justify-center w-full h-full p-[3rem] mobile:flex-col">
        <AnimatePresence>
          {activeSection == item.id ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ x: -1000, transition: { duration: 0.2, stiffness: 100 } }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="h-full w-1/2 relative flex justify-center items-center mobile:w-full mobile:h-fit"
            >
              <img src={item.img} className="object-cover" height="50%" />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {activeSection == item.id ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ x: 2000, transition: { duration: 0.2, stiffness: 100 } }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="h-full w-1/2 flex flex-col justify-center pl-10 mobile:w-full mobile:justify-start mobile:h-fit mobile:mt-10 mobile:items-start mobile:pl-0"
            >
              <p className="text-2xl font-truculenta font-bold tracking-wide text-white mb-2">
                {item.title}
              </p>
              <p className="text-sm tracking-wide text-white mb-5">
                {item.desc}
              </p>
              {item?.link?.length ? (
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="bg-[#ffa600] flex justify-center text-white rounded-2xl py-2 px-3 text-xs w-[7rem] hover:bg-transparent border border-[rgb(255,166,0)] duration-500 ease-out transition-all"
                  href={item.link}
                  target="_blank"
                >
                  {item?.btn || "See more"}
                </motion.a>
              ) : item?.btn ? (
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="bg-[rgb(255,166,0)] text-white rounded-2xl py-2 px-3 text-xs w-[7rem] hover:bg-transparent border border-[rgb(255,166,0)] duration-500 ease-out transition-all"
                  onClick={handleBtnAction}
                >
                  {item?.btn || "See more"}
                </motion.button>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

let delayScrolling = false;

const Work = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [showDetails, setShowDetails] = useState(false);

  const scrollRef = useRef();
  const navigate = useNavigate();
  const { hash } = useLocation();

  const scaleX = useSpring(1, { stiffness: 100, damping: 30 });

  useEffect(() => {
    navigate("#main");
    setShowDetails(false);

    setTimeout(() => {
      focusSection("main", "main-work-section");
    }, 0.2 * 1000);
  }, []);

  useEffect(() => {
    //catch scrolling for scroll snapping
    const handleScroll = (event) => {
      if (showDetails) return;
      if (delayScrolling) return; //prevent overscrolling

      //find index in list for active section
      let i = workSections.findIndex((el) => el.title === activeSection) || 0;

      if (event.deltaY < 0) {
        if (i <= 0) return;
        let newSection = workSections[i - 1];
        navigate(`#${newSection.title}`); //Scroll Up

        if (i !== 0) scaleX.set(newSection.progress);
      } else {
        if (i >= workSections.length - 1) return;
        let newSection = workSections[i + 1];
        navigate(`#${newSection.title}`); //Scroll Down

        if (i !== 0) scaleX.set(newSection.progress);
      }

      delayScrolling = true;

      setTimeout(() => {
        delayScrolling = false;
      }, 0.5 * 1000);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, showDetails]);

  useEffect(() => {
    //safe new active anchor tag
    let i = workSections.findIndex((el) => el.title === hash.split("#")[1]);

    //check if hash is valid
    if (i !== -1) {
      //valid hash
      focusSection(workSections[i].title, workSections[i].id);
    }
  }, [hash]);

  const focusSection = (title, id) => {
    setActiveSection(title);

    //scroll to anchor tag
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleDetailsModal = (open) => {
    if (open) setShowDetails(true);
    else setShowDetails(false);
  };

  useEffect(() => {
    const cards = document.querySelector(".cards");
    const images = document.querySelectorAll(".card__img");
    const backgrounds = document.querySelectorAll(".card__bg");
    const range = 40;

    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

    let timeout;

    const handleMouseMove = ({ x, y }) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

        [].forEach.call(images, (image) => {
          image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });

        [].forEach.call(backgrounds, (background) => {
          background.style.backgroundPosition = `${xValue * 0.45}px ${
            -yValue * 0.45
          }px`;
        });
      });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#06111d] work-container relative">
      {!showDetails ? (
        <a className="back-arrow" href="./#work">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="34"
            viewBox="0 0 67 34"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#fff"
              strokeLinecap="round"
              transform="translate(2 1)"
            >
              <path strokeWidth="3" d="M0,15.5533333 L64,15.5533333"></path>
              <polyline
                strokeWidth="3"
                points="15.556 0 0 15.556 15.556 31.111"
              ></polyline>
            </g>
          </svg>
        </a>
      ) : null}

      <div id="main-work-section" className="w-full work-section flex">
        <div className="cards">
          {parallaxCards.map((item, index) =>
            index < 6 ? (
              <div key={index} className="cards__container">
                <div key={index} className="card">
                  <div className="card__bg"></div>
                  <img className="card__img" src={item.src} draggable={false} />
                  <div className="card__text">
                    <p className="card__title">{item.title}</p>
                  </div>
                </div>
              </div>
            ) : index >= 6 && index < 12 ? (
              <div key={index} className="cards__container">
                <div className="card">
                  <div className="card__bg"></div>
                  <img className="card__img" src={item.src} draggable={false} />
                  <div className="card__text">
                    <p className="card__title">{item.title}</p>
                  </div>
                </div>
              </div>
            ) : index >= 12 && index < 18 ? (
              <div key={index} className="cards__container">
                <div className="card">
                  <div className="card__bg"></div>
                  <img className="card__img" src={item.src} draggable={false} />
                  <div className="card__text">
                    <p className="card__title">{item.title}</p>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>

        <div className="absolute flex flex-col items-center w-full top-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-5 wrap text-white font-bold text-5xl ss:text-5xl sm:text-[5rem] tracking-[.1em]"
          >
            My Work
          </motion.div>
          <div className="flex flex-col w-[12rem]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "7rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[2px] bg-red-400 self-start mb-4"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "7rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-3/4 h-[2px] bg-red-400 self-end"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-5 wrap text-white text-lg tracking-wide"
          >
            Some projects of myself
          </motion.div>
        </div>
        <AnimatePresence>
          {activeSection == "main" ? (
            <motion.div
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="scrollDown text-xs font-truculenta"
            >
              SCROLLDOWN
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div ref={scrollRef} id="work-projects-container" className="relative">
        {!showDetails ? (
          <div className="sticky top-0 left-0 pt-[30px] text-center mobile:top-[40px]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, damping: 0, delay: 0.2 }}
              className="text-[rgb(255,166,0)] font-sono_bold font-bold text-4xl tracking-[.1em]"
            >
              Featured Works
            </motion.p>
            <motion.div
              id="works-progress-bar"
              style={{ scaleX, translateX: "-50%", width: "100%" }}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1, damping: 50 }}
              className="mt-2 bg-white h-[5px] absolute left-1/2 translate-x-[-50%]"
            />
          </div>
        ) : null}
        {workItems.map((item) => (
          <Single
            item={item}
            key={item.id}
            activeSection={activeSection}
            handleDetailsModal={handleDetailsModal}
          />
        ))}
      </div>

      <WorkDetailsModal
        showDetails={showDetails}
        onRequestClose={() => handleDetailsModal(false)}
        activeSection={activeSection}
      />
    </div>
  );
};

export default Work;
