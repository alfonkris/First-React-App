import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';

class Register extends Component {
  render() {
    return (
      <div className="register paralax">
        <div className="register-title">Tingkatkan Skillmu Sekarang!</div>
        <div className="register-subtitle">Kami membuka kelas baru setiap bulannya. Lulusan Code Course Camp memiliki peluang lebih tinggi untuk mendapatkan pekerjaan sebagai developer dikarenakan lulusan kamu dijamin memiliki kemampuan yang dicari oleh para industri teknologi di Indonesia.</div>
        <div className="register-button">Daftar Sekarang</div>
      </div>
    );
  }
}

export default Register;
