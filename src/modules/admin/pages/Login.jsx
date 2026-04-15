import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const mockResponse = {
        token: 'mock-jwt-token-' + Date.now(),
        role: 'Admin',
        username: form.username,
      };

      login(mockResponse);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2A5DB0] p-4">
      <div className="w-full max-w-sm">
        {/* XP Window Style */}
        <div className="xp-bg rounded-t-[6px] border-2 border-[#0055E5] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Title Bar */}
          <div className="xp-titlebar h-8 flex items-center justify-between px-1.5 rounded-t-[4px]">
            <div className="flex items-center gap-1.5 xp-title-text text-[13px] tracking-wide">
              <div className="w-4 h-4 bg-white text-[#0055E5] font-bold flex items-center justify-center text-[10px] shadow-sm">M</div>
              MEDILIMS PRO 2026 - Login
            </div>
            <div className="flex gap-[2px]">
              <button className="xp-window-btn w-6 h-6 flex items-center justify-center pb-2 text-sm leading-none focus:outline-none">_</button>
              <button className="xp-window-btn w-6 h-6 flex items-center justify-center text-xs leading-none focus:outline-none">□</button>
              <button className="xp-close-btn w-6 h-6 flex items-center justify-center text-xs leading-none focus:outline-none">X</button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#0058E6] mx-auto rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h2 className="text-lg font-bold text-[#0033CC]">MEDILIMS PRO</h2>
              <p className="text-[11px] text-gray-600">Hospital Laboratory Information System</p>
            </div>

            {error && (
              <div className="bg-[#FFEEEE] border border-[#CC0000] text-[#CC0000] px-3 py-2 mb-4 text-[11px]">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold mb-1">Username</label>
                <input
                  type="text"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="xp-input w-full px-2 py-1 text-[11px]"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold mb-1">Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="xp-input w-full px-2 py-1 text-[11px]"
                  placeholder="Enter password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="xp-btn w-full py-2 font-bold text-[12px] disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>

            <div className="mt-4 text-[10px] text-center text-gray-500">
              Default: admin / admin123
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
