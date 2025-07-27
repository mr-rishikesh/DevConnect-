import React, { useState, ChangeEvent } from 'react';

const UserSettingsCard= () => {
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/100'); // default avatar
  const [status, setStatus] = useState(false);
  const [roles, setRoles] = useState({
    administrator: false,
    member: false,
    viewer: true,
  });

  const handleRoleChange = (role) => {
    setRoles(prev => ({ ...prev, [role]: !prev[role] }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  return (
    <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg max-w-md w-full mx-auto space-y-6">
      {/* Upload Avatar */}
      <div className="space-y-3">
        <label className="block text-sm font-medium">Upload avatar</label>
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt="Avatar"
            className="w-14 h-14 rounded-full object-cover border"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-sm file:mr-3 file:px-3 file:py-1 file:bg-slate-700 file:text-white file:rounded-md"
          />
        </div>
        <p className="text-xs text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800×400px).
        </p>
        <div className="flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md text-sm">
            Upload new picture
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 px-4 py-1 rounded-md text-sm">
            Delete
          </button>
        </div>
      </div>

      {/* Assign Role */}
      <div>
        <p className="text-sm font-medium mb-2">Assign Role</p>
        <div className="flex gap-4 flex-wrap">
          {(['administrator', 'member', 'viewer'] ).map(role => (
            <label key={role} className="inline-flex items-center gap-2 text-sm capitalize">
              <input
                type="checkbox"
                checked={roles[role]}
                onChange={() => handleRoleChange(role)}
                className="accent-blue-500"
              />
              {role}
            </label>
          ))}
        </div>
      </div>

      {/* Status Toggle */}
      <div className="flex items-center gap-3">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={status}
            onChange={() => setStatus(!status)}
          />
          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-offset-2 transition-all"></div>
        </label>
        <span className="text-sm">Inactive</span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
          Update user
        </button>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default UserSettingsCard;
