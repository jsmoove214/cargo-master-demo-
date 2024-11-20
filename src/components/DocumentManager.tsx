import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Upload, Search, Filter, Download, Trash2, Clock, Tag } from 'lucide-react';

const DocumentManager = () => {
  const documents = [
    {
      id: 1,
      name: 'Invoice-2024-001.pdf',
      type: 'Invoice',
      size: '245 KB',
      uploadedAt: '2024-03-20',
      tags: ['Shipping', 'Important'],
    },
    {
      id: 2,
      name: 'BOL-2024-032.pdf',
      type: 'Bill of Lading',
      size: '1.2 MB',
      uploadedAt: '2024-03-19',
      tags: ['Documentation', 'Customs'],
    },
  ];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Dropped files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
          Document Management
        </h2>
        <div className="flex gap-3">
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search documents..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div {...getRootProps()} className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-500'}`}>
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">
          {isDragActive ? 'Drop files here...' : 'Drag & drop files here, or click to select'}
        </p>
        <p className="text-sm text-gray-500">Supports PDF, DOC, DOCX, PNG, JPG</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-50 p-4 text-sm font-medium text-gray-500">
          <div className="col-span-5">Document</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Size</div>
          <div className="col-span-2">Uploaded</div>
          <div className="col-span-1">Actions</div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {documents.map((doc) => (
            <div key={doc.id} className="grid grid-cols-12 p-4 items-center hover:bg-gray-50 transition-colors">
              <div className="col-span-5 flex items-center gap-3">
                <FileText className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="font-medium text-gray-900">{doc.name}</p>
                  <div className="flex gap-2 mt-1">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-gray-500">{doc.type}</div>
              <div className="col-span-2 text-gray-500">{doc.size}</div>
              <div className="col-span-2 flex items-center gap-2 text-gray-500">
                <Clock className="w-4 h-4" />
                {doc.uploadedAt}
              </div>
              <div className="col-span-1 flex gap-2">
                <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentManager;