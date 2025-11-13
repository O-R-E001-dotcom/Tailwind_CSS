export default function LoginForm() {
  return (
    <div className="p-8 space-y-4 max-w-md mx-auto">
      <form className="p-4 mx-auto border-2 border-blue-300 rounded-lg shadow-lg hover:shadow-2xl transition-all w-72 h-96 items-center space-y-6">
        <label htmlFor="Email" className="text-lg font-bold">
          Email:
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none"
        />

        <label htmlFor="Passowrd" className="text-lg font-bold">
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none"
        />
        <div className="flex gap-4">
          <label htmlFor="">Remember me</label>
          <input
            type="checkbox"
            placeholder="Remember me"
            className=" px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
}
