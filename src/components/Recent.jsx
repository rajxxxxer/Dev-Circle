import React, { useEffect, useState } from 'react';
import { dummyRecentMessagesData } from '../assets/assets';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Recent = () => {
  const [msg, setMsg] = useState([]);

  const fetchmsg = async () => {
    setMsg(dummyRecentMessagesData);
  };

  useEffect(() => {
    fetchmsg();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border w-full max-w-xs">

      <h3 className="text-lg font-semibold mb-3">Recent Messages</h3>

      <div className="flex flex-col gap-4 h-64 overflow-y-auto no-scrollbar">
        {msg.map((m, idx) => (
          <Link
            to={`/messages/${m.from_user_id.id}`}
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src={m.from_user_id.profile_picture}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover border"
            />

            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">{m.from_user_id.full_name}</p>
                <p className="text-xs text-gray-500">
                  {moment(m.createdAt).fromNow()}
                </p>
              </div>

              <div className="flex justify-between text-sm">
                <p className="truncate">{m.text ? m.text : 'Media'}</p>

                {!m.seen && (
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Recent;
