import Header from "../components/ui/Header";
import Navbar from "../components/ui/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar brand="Learn React" />

      <Header
        title="Selamat Datang di Learn React"
        description="Temukan Produk dan Informasi yang Anda Butuhkan"
      />
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Mengapa Memilih Kami?</h2>
        <p className="text-gray-600 leading-relaxed">
          Kami menyediakan produk berkualitas dengan harga bersaing dan
          informasi terpercaya melalui blog kami. Bergabunglah bersama ratusan
          pelanggan puas lainnya!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
