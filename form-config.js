const FORM_CONFIG = {
    url: 'https://bukabantuan.bukalapak.com/form/175',
    fields: [
        {
            selector: 'input[name=name]',
            type: 'input',
            value: 'John'
        },
        {
            selector: 'input[name=email]',
            type: 'input',
            value: 'John@john.com'
        },
        {
            selector: 'input[name=merek]',
            type: 'input',
            value: 'Merek'
        },
        {
            selector: 'input[name=nomor_registrasi]',
            type: 'input',
            value: 'nomor_registrasi'
        },
        {
            selector: 'input[name=nama_pemilik]',
            type: 'input',
            value: 'nama_pemilik'
        },
        {
            selector: 'input[name=pemilik_haki_]',
            type: 'radio',
            value: 'Iya (Yes)'
        },
        {
            selector: 'input[name=hubungan_pelapor]',
            type: 'input',
            value: 'hubungan_pelapor'
        },
        {
            selector: 'input[name=nama_perusahaan]',
            type: 'input',
            value: 'nama_perusahaan'
        },
        {
            selector: 'input[name=website_perusahaan]',
            type: 'input',
            value: 'website_perusahaan'
        },
        {
            selector: 'input[name=alamat_perusahaan]',
            type: 'input',
            value: 'alamat_perusahaan'
        },
        {
            selector: 'input[name=alamat_email_pemilik_merek]',
            type: 'input',
            value: 'alamat@alamat.com'
        },
        {
            selector: 'input[name=no_telepon_pelapor]',
            type: 'input',
            value: '12121'
        },
        {
            selector: 'input[name=link_barang]',
            type: 'input',
            value: 'link_barang'
        },
        {
            selector: 'textarea[name=body]',
            type: 'textarea',
            value: 'This textarea is of more than 20 characters'
        },
        {
            selector: 'input[name=link_barang_banyak]',
            type: 'file',
            value: './sample.pdf'
        },
        {
            selector: 'input[name=surat_kepemilikan_merek]',
            type: 'file',
            value: './sample.pdf'
        },
        {
            selector: 'input[name=bukti_surat_kuasa]',
            type: 'file',
            value: './sample.pdf'
        },
        {
            selector: 'input[name=bukti_surat_izin_usaha]',
            type: 'file',
            value: './sample.pdf'
        },
        {
            selector: 'input[type=checkbox]',
            type: 'checkbox',
            value: 'isTncChecked'
        }
    ]
}

module.exports = FORM_CONFIG;