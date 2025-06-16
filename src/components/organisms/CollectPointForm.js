import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { buscarEnderecoPorCEP } from '../../services/viacep';
import './CollectPointForm.css';
export function CollectPointForm({ usuarioId, onSalvar, localEditavel }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUf] = useState('');
    const [residuos, setResiduos] = useState([]);
    const [erroCep, setErroCep] = useState('');
    useEffect(() => {
        if (localEditavel) {
            setNome(localEditavel.nome ?? '');
            setDescricao(localEditavel.descricao ?? '');
            setCep(localEditavel.cep ?? '');
            setLogradouro(localEditavel.logradouro ?? '');
            setBairro(localEditavel.bairro ?? '');
            setCidade(localEditavel.cidade ?? '');
            setLocalidade(localEditavel.localidade ?? '');
            setUf(localEditavel.uf ?? '');
            setResiduos(Array.isArray(localEditavel.residuos) ? localEditavel.residuos : []);
            setErroCep('');
        }
        else {
            setNome('');
            setDescricao('');
            setCep('');
            setLogradouro('');
            setBairro('');
            setCidade('');
            setLocalidade('');
            setUf('');
            setResiduos([]);
            setErroCep('');
        }
    }, [localEditavel]);
    const handleBuscarCep = async () => {
        setErroCep('');
        if (cep.length !== 8 || !/^\d+$/.test(cep)) {
            setErroCep('CEP inválido. Digite 8 dígitos numéricos.');
            setLogradouro('');
            setBairro('');
            setCidade('');
            setLocalidade('');
            setUf('');
            return;
        }
        const dadosEndereco = await buscarEnderecoPorCEP(cep);
        if (dadosEndereco && !dadosEndereco.erro) {
            setLogradouro(dadosEndereco.logradouro || '');
            setBairro(dadosEndereco.bairro || '');
            setCidade(dadosEndereco.localidade || '');
            setLocalidade(dadosEndereco.localidade || '');
            setUf(dadosEndereco.uf || '');
            setErroCep('');
        }
        else {
            setLogradouro('');
            setBairro('');
            setCidade('');
            setLocalidade('');
            setUf('');
            setErroCep('CEP não encontrado ou erro na busca.');
        }
    };
    const handleSalvar = () => {
        if (!nome || !descricao || !cep || !logradouro || !bairro || !cidade || !localidade || !uf) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        if (residuos.length === 0) {
            alert('Por favor, selecione pelo menos um tipo de resíduo.');
            return;
        }
        const novoLocal = {
            id: localEditavel?.id ?? uuidv4(),
            usuarioId,
            nome,
            descricao,
            cep,
            logradouro,
            bairro,
            cidade,
            localidade,
            uf,
            residuos,
        };
        onSalvar(novoLocal);
    };
    const toggleResiduo = (tipo) => {
        setResiduos((prev) => prev.includes(tipo) ? prev.filter((r) => r !== tipo) : [...prev, tipo]);
    };
    return (_jsxs("form", { onSubmit: (e) => {
            e.preventDefault();
            handleSalvar();
        }, style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '2rem',
            border: '1px solid #eee',
            borderRadius: '8px',
        }, children: [_jsx("h2", { children: localEditavel ? 'Editar Local de Coleta' : 'Cadastrar Novo Local de Coleta' }), _jsxs("div", { children: [_jsx("label", { children: "Nome do Local:" }), _jsx("input", { type: "text", value: nome, onChange: (e) => setNome(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Descri\u00E7\u00E3o:" }), _jsx("textarea", { value: descricao, onChange: (e) => setDescricao(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "CEP:" }), _jsxs("div", { style: { display: 'flex', gap: '0.5rem', alignItems: 'center' }, children: [_jsx("input", { type: "text", value: cep, onChange: (e) => setCep(e.target.value), onBlur: handleBuscarCep, maxLength: 8, pattern: "\\d{8}", title: "Digite um CEP v\u00E1lido com 8 d\u00EDgitos", required: true }), _jsx("button", { className: "botao", type: "button", onClick: handleBuscarCep, style: { padding: '0.5rem 1rem' }, children: "Buscar CEP" })] }), erroCep && (_jsx("p", { style: { color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }, children: erroCep }))] }), _jsxs("div", { children: [_jsx("label", { children: "Logradouro:" }), _jsx("input", { type: "text", value: logradouro, onChange: (e) => setLogradouro(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Bairro:" }), _jsx("input", { type: "text", value: bairro, onChange: (e) => setBairro(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Cidade:" }), _jsx("input", { type: "text", value: cidade, onChange: (e) => setCidade(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Res\u00EDduos Aceitos:" }), _jsx("div", { style: { display: 'flex', gap: '1rem' }, children: ['Papel', 'Plástico', 'Metal', 'Vidro', 'Orgânico'].map((tipo) => (_jsxs("label", { style: { marginRight: '1rem' }, children: [_jsx("input", { type: "checkbox", checked: residuos.includes(tipo), onChange: () => toggleResiduo(tipo) }), tipo] }, tipo))) })] }), _jsx("button", { type: "submit", children: localEditavel ? 'Salvar Edição' : 'Cadastrar Local' })] }));
}
