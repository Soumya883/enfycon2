import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import {
  Users, Mail, FileText, BarChart3, Plus, Trash2, Edit,
  Search, ChevronLeft, ChevronRight, Lock, LogIn
} from "lucide-react";

type TabId = "contacts" | "blog" | "newsletter";

export default function AdminPage() {
  const navigate = (path: string) => { window.location.href = path; };
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Lock className="h-16 w-16 text-gray-400 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Access Required</h1>
        <p className="text-gray-600 mb-6">Please sign in with an admin account to access the dashboard.</p>
        <Button onClick={() => startLogin()} className="gap-2">
          <LogIn className="h-4 w-4" /> Sign In
        </Button>
      </div>
    );
  }

  return <AdminDashboard />;
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("contacts");
  const goHome = () => { window.location.href = "/"; };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={goHome} className="gap-2">
              <ChevronLeft className="h-4 w-4" /> Back to Site
            </Button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-lg font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="gap-1">
              <Users className="h-3 w-3" /> Admin
            </Badge>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Stats Cards */}
        <DashboardStats />

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabId)} className="mt-8">
          <TabsList className="bg-white border border-gray-200 shadow-sm">
            <TabsTrigger value="contacts" className="gap-2">
              <Mail className="h-4 w-4" /> Contact Submissions
            </TabsTrigger>
            <TabsTrigger value="blog" className="gap-2">
              <FileText className="h-4 w-4" /> Blog Posts
            </TabsTrigger>
            <TabsTrigger value="newsletter" className="gap-2">
              <BarChart3 className="h-4 w-4" /> Newsletter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <ContactsPanel />
          </TabsContent>

          <TabsContent value="blog">
            <BlogPanel />
          </TabsContent>

          <TabsContent value="newsletter">
            <NewsletterPanel />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function DashboardStats() {
  const { data: contacts } = trpc.admin.contacts.list.useQuery({ page: 1, limit: 1000 });
  const { data: posts } = trpc.admin.blogPosts.list.useQuery({ page: 1, limit: 1000 });
  const { data: newsletter } = trpc.admin.newsletter.list.useQuery({ page: 1, limit: 1000 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900">{contacts?.total ?? 0}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Blog Posts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900">{posts?.total ?? 0}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Newsletter Subscribers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900">{newsletter?.total ?? 0}</div>
        </CardContent>
      </Card>
    </div>
  );
}

function ContactsPanel() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, refetch } = trpc.admin.contacts.list.useQuery({
    page, limit: 20, search: search || undefined,
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Contact Submissions</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-6 w-6 border-4 border-blue-600 border-t-transparent rounded-full" />
          </div>
        ) : data?.contacts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No submissions found.</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Company</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Message</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.contacts.map((c) => (
                    <tr key={c.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium">{c.name}</td>
                      <td className="py-3 px-4 text-blue-600">{c.email}</td>
                      <td className="py-3 px-4 text-gray-600">{c.company || "—"}</td>
                      <td className="py-3 px-4 text-gray-600 max-w-xs truncate">{c.message}</td>
                      <td className="py-3 px-4 text-gray-500 text-xs">{new Date(c.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {data && data.total > 20 && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">{data.total} total submissions</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setPage(p => p + 1)} disabled={page * 20 >= (data?.total ?? 0)}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

function BlogPanel() {
  const [page, setPage] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const { data, isLoading, refetch } = trpc.admin.blogPosts.list.useQuery({ page, limit: 10 });
  const createMutation = trpc.admin.blogPosts.create.useMutation({
    onSuccess: () => { refetch(); setShowCreate(false); toast.success("Blog post created!"); },
    onError: (err) => toast.error(err.message),
  });
  const updateMutation = trpc.admin.blogPosts.update.useMutation({
    onSuccess: () => { refetch(); setEditingId(null); toast.success("Blog post updated!"); },
    onError: (err) => toast.error(err.message),
  });
  const deleteMutation = trpc.admin.blogPosts.delete.useMutation({
    onSuccess: () => { refetch(); toast.success("Blog post deleted!"); },
    onError: (err) => toast.error(err.message),
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Blog Posts</CardTitle>
          <Dialog open={showCreate} onOpenChange={setShowCreate}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> New Post</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader><DialogTitle>Create Blog Post</DialogTitle></DialogHeader>
              <BlogPostForm
                onSubmit={(vals) => createMutation.mutate(vals)}
                isLoading={createMutation.isPending}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-6 w-6 border-4 border-blue-600 border-t-transparent rounded-full" />
          </div>
        ) : data?.posts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No blog posts yet. Create one!</div>
        ) : (
          <div className="space-y-4">
            {data?.posts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <h3 className="font-semibold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.excerpt?.slice(0, 80)}...</p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant={post.published ? "default" : "secondary"}>
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                    {post.category && <Badge variant="outline">{post.category}</Badge>}
                    <span className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setEditingId(post.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => {
                    if (confirm("Delete this post?")) deleteMutation.mutate({ id: post.id });
                  }}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        {data && data.total > 10 && (
          <div className="flex justify-between mt-4 pt-4 border-t">
            <span className="text-sm text-gray-500">{data.total} total posts</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => setPage(p => p + 1)} disabled={page * 10 >= (data?.total ?? 0)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function BlogPostForm({ onSubmit, isLoading, initial }: {
  onSubmit: (vals: any) => void;
  isLoading: boolean;
  initial?: { title: string; slug: string; excerpt: string; content: string; author: string; category: string; imageUrl: string; published: boolean };
}) {
  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "");
  const [content, setContent] = useState(initial?.content || "");
  const [author, setAuthor] = useState(initial?.author || "");
  const [category, setCategory] = useState(initial?.category || "");
  const [imageUrl, setImageUrl] = useState(initial?.imageUrl || "");
  const [published, setPublished] = useState(initial?.published || false);

  useEffect(() => {
    if (initial) {
      setTitle(initial.title);
      setSlug(initial.slug);
      setExcerpt(initial.excerpt);
      setContent(initial.content);
      setAuthor(initial.author);
      setCategory(initial.category);
      setImageUrl(initial.imageUrl);
      setPublished(initial.published);
    }
  }, [initial]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, slug, excerpt, content, author, category, imageUrl, published });
      }}
      className="space-y-4"
    >
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" value={title} onChange={(e) => { setTitle(e.target.value); if (!initial) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")); }} required />
      </div>
      <div>
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Input id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={6} required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
      </div>
      <div>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
      </div>
      <div className="flex items-center gap-3">
        <Switch id="published" checked={published} onCheckedChange={setPublished} />
        <Label htmlFor="published">Published</Label>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Post"}
      </Button>
    </form>
  );
}

function NewsletterPanel() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = trpc.admin.newsletter.list.useQuery({ page, limit: 20 });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Newsletter Subscribers</CardTitle>
        <CardDescription>Manage email newsletter subscribers</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-6 w-6 border-4 border-blue-600 border-t-transparent rounded-full" />
          </div>
        ) : data?.subscribers.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No subscribers yet.</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Subscribed</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.subscribers.map((sub) => (
                    <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-blue-600">{sub.email}</td>
                      <td className="py-3 px-4">
                        <Badge variant={sub.active ? "default" : "secondary"}>
                          {sub.active ? "Active" : "Inactive"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-500 text-xs">{new Date(sub.subscribedAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {data && data.total > 20 && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">{data.total} total subscribers</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setPage(p => p + 1)} disabled={page * 20 >= (data?.total ?? 0)}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
