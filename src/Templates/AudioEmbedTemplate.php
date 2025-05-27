<?php

/*
 * This file is part of fof/upload.
 *
 * Copyright (c) FriendsOfFlarum.
 * Copyright (c) Flagrow.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Upload\Templates;

use FoF\Upload\File;

class AudioEmbedTemplate extends AbstractTemplate
{
    /**
     * @var string
     */
    protected $tag = 'audio-embed';

    /**
     * {@inheritdoc}
     */
    public function name(): string
    {
        return '音频渲染';
    }

    /**
     * {@inheritdoc}
     */
    public function description(): string
    {
        return '渲染音频';
    }

    /**
     * {@inheritdoc}
     */
    public function preview(File $file): string
    {
        $audioext = pathinfo($file->base_name, PATHINFO_EXTENSION);
        return '[audio '.$audioext.'='.$file->url.' download=download]';
    }
}
